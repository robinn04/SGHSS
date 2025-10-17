const db = require('../models/db');
// lista o estoques e seus responsaveis e tambem os supriimentos e suas quantidades
exports.listarEstoquesComSuprimentos = (req, res) => {
  const query = `
    SELECT 
      e.idEstoque,
      e.ultimaAtualizacao,
      s.idSuprimentos,
      s.nomeSuprimento,
      s.tipoSuprimento,
      s.quantidade,
      s.dataValidade
    FROM Estoque e
    LEFT JOIN Suprimentos s ON e.idEstoque = s.Estoque_idEstoque
    ORDER BY e.idEstoque, s.nomeSuprimento
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const estoques = {};

    results.forEach(row => {
      const id = row.idEstoque;
      if (!estoques[id]) {
        estoques[id] = {
          idEstoque: id,
          responsavel: row.responsavel,
          ultimaAtualizacao: row.ultimaAtualizacao,
          suprimentos: []
        };
      }

      if (row.idSuprimentos) {
        estoques[id].suprimentos.push({
          idSuprimentos: row.idSuprimentos,
          nomeSuprimento: row.nomeSuprimento,
          tipoSuprimento: row.tipoSuprimento,
          quantidade: row.quantidade,
          dataValidade: row.dataValidade
        });
      }
    });

    res.json({ estoques: Object.values(estoques) });
  });
};
