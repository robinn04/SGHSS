const db = require('../models/db');
const bcrypt = require('bcryptjs');
// funcionalidade para cadastrar pacinetes
exports.cadastrarPaciente = (req, res) => {
  const {
    usuario,
    senha,
    nomePaciente,
    cpfPaciente,
    dataNascimentoPaciente,
    historicoClinico,
    endereco
  } = req.body;

  const hashedPassword = bcrypt.hashSync(senha, 8);

  // login do paciente (ainda nao implementado no sistema)
  db.query(
    'INSERT INTO Login (usuario, senha, tipoUsuario, statusLogin) VALUES (?, ?, ?, ?)',
    [usuario, hashedPassword, 'paciente', true],
    (err, loginResult) => {
      if (err) return res.status(500).json({ error: err.message });

      const idLogin = loginResult.insertId;

      // criacao do endereco do paciente pego de outra tabela 
      db.query(
        'INSERT INTO Endereco (longradouro, numero, complemento, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?, ?)',
        [
          endereco.longradouro,
          endereco.numero,
          endereco.complemento,
          endereco.bairro,
          endereco.cidade,
          endereco.estado
        ],
        (err, enderecoResult) => {
          if (err) return res.status(500).json({ error: err.message });

          const idEndereco = enderecoResult.insertId;

          // aqui eu crio o paciente
          db.query(
            'INSERT INTO Paciente (Login_idLogin, Endereco_idEndereco, nomePaciente, cpfPaciente, dataNacismentoPaciente, historicoClinico) VALUES (?, ?, ?, ?, ?, ?)',
            [
              idLogin,
              idEndereco,
              nomePaciente,
              cpfPaciente,
              dataNascimentoPaciente,
              historicoClinico
            ],
            (err) => {
              if (err) return res.status(500).json({ error: err.message });
              res.status(201).json({ message: 'Paciente cadastrado com sucesso!' });
            }
          );
        }
      );
    }
  );
};
// funcionalidade para remover pacientes
exports.removerPaciente = (req, res) => {
  const idPaciente = req.params.id;

  // buscar os dados relacionados
  db.query(
    'SELECT Login_idLogin, Endereco_idEndereco FROM Paciente WHERE idPaciente = ?',
    [idPaciente],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ error: 'Paciente não encontrado' });

      const { Login_idLogin, Endereco_idEndereco } = results[0];

      // remover paciente
      db.query('DELETE FROM Paciente WHERE idPaciente = ?', [idPaciente], (err) => {
        if (err) return res.status(500).json({ error: err.message });

        // remover login do paciente (ainda nao implementado no sistema)
        db.query('DELETE FROM Login WHERE idLogin = ?', [Login_idLogin], (err) => {
          if (err) return res.status(500).json({ error: err.message });

          // remover endereco do paciente 
          db.query('DELETE FROM Endereco WHERE idEndereco = ?', [Endereco_idEndereco], (err) => {
            if (err) return res.status(500).json({ error: err.message });

            res.json({ message: 'Paciente removido com sucesso!' });
          });
        });
      });
    }
  );
};
// funcionalidade para listar todos os pacientes
exports.listarPacientes = (req, res) => {
  const query = `
    SELECT 
      p.idPaciente,
      p.nomePaciente,
      p.cpfPaciente,
      p.dataNacismentoPaciente,
      p.historicoClinico,
      e.longradouro,
      e.numero,
      e.complemento,
      e.bairro,
      e.cidade,
      e.estado
    FROM Paciente p
    JOIN Endereco e ON p.Endereco_idEndereco = e.idEndereco
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ pacientes: results });
  });
};