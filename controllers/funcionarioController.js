const db = require('../models/db');
const bcrypt = require('bcryptjs');

// funcionalidade para cadastrar funcionario
exports.cadastrarFuncionario = (req, res) => {
  const {
    usuario,
    senha,
    nomeProfissional,
    cpfProfissional,
    cargo,
    horarioTrabalho
  } = req.body;

  const hashedPassword = bcrypt.hashSync(senha, 8);

  // login do profissional da saude (ainda nao implementado no sistema)
  db.query(
    'INSERT INTO Login (usuario, senha, tipoUsuario, statusLogin) VALUES (?, ?, ?, ?)',
    [usuario, hashedPassword, 'profissional', true],
    (err, loginResult) => {
      if (err) return res.status(500).json({ error: err.message });

      const idLogin = loginResult.insertId;

      // Criacao de um profissional da profissional da saude
      db.query(
        'INSERT INTO ProfissionalSaude (Login_idLogin, nomeProfissional, cpfProfissional, cargo, horarioTrabalho) VALUES (?, ?, ?, ?, ?)',
        [idLogin, nomeProfissional, cpfProfissional, cargo, horarioTrabalho],
        (err) => {
          if (err) return res.status(500).json({ error: err.message });

          res.status(201).json({ message: 'Funcionário cadastrado com sucesso!' });
        }
      );
    }
  );
};
// funcionalidade para remover funcionario
exports.removerFuncionario = (req, res) => {
  const idProfissional = req.params.id;

  // buscar login do funcionario (funcionalidade de login para funcionario ainda em desenvolvimento)
  db.query(
    'SELECT Login_idLogin FROM ProfissionalSaude WHERE idProfissionalSaude = ?',
    [idProfissional],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ error: 'Funcionário não encontrado' });

      const idLogin = results[0].Login_idLogin;

      // remocao do funcionario
      db.query('DELETE FROM ProfissionalSaude WHERE idProfissionalSaude = ?', [idProfissional], (err) => {
        if (err) return res.status(500).json({ error: err.message });

        // remover login do funcionario (ainda nao implementado no sistema)
        db.query('DELETE FROM Login WHERE idLogin = ?', [idLogin], (err) => {
          if (err) return res.status(500).json({ error: err.message });

          res.json({ message: 'Funcionário removido com sucesso!' });
        });
      });
    }
  );
};
// funcionalidade para listar funcionarios
exports.listarFuncionarios = (req, res) => {
  const query = `
    SELECT 
      ps.idProfissionalSaude,
      ps.nomeProfissional,
      ps.cpfProfissional,
      ps.cargo,
      ps.horarioTrabalho,
      l.usuario,
      l.statusLogin
    FROM ProfissionalSaude ps
    JOIN Login l ON ps.Login_idLogin = l.idLogin
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ funcionarios: results });
  });
};

