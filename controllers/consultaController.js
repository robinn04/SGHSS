const db = require('../models/db');

// agendamento de uma consulta por parte de um profissional
exports.agendarConsulta = (req, res) => {
  const {
    Paciente_idPaciente,
    ProfissionalSaude_idProfissionalSaude,
    dataHoraConsulta,
    tipoConsulta,
    statusConsulta,
    observacoesConsultas
  } = req.body;

  const query = `
    INSERT INTO Consulta (
      Paciente_idPaciente,
      ProfissionalSaude_idProfissionalSaude,
      dataHoraConsulta,
      tipoConsulta,
      statusConsulta,
      observacoesConsultas
    ) VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      Paciente_idPaciente,
      ProfissionalSaude_idProfissionalSaude,
      dataHoraConsulta,
      tipoConsulta,
      statusConsulta,
      observacoesConsultas
    ],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({ message: 'Consulta agendada com sucesso!' });
    }
  );
};

// listar todas as consultas no sistema
exports.listarConsultasSimples = (req, res) => {
  const query = `
    SELECT 
      idConsulta,
      Paciente_idPaciente,
      ProfissionalSaude_idProfissionalSaude,
      dataHoraConsulta,
      tipoConsulta,
      statusConsulta,
      observacoesConsultas
    FROM Consulta
    ORDER BY dataHoraConsulta ASC
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ consultas: results });
  });
};
