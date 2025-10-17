const db = require('../models/db');
// fazer o agendamento de teleconsultas
exports.agendarTeleconsulta = (req, res) => {
  const {
    Paciente_idPaciente,
    ProfissionalSaude_idProfissionalSaude,
    linkVideo,
    dataHoraTelemedicina,
    duracaoTelemedicina,
    statusTelemedicina
  } = req.body;

  const query = `
    INSERT INTO Telemedicina (
      Paciente_idPaciente,
      ProfissionalSaude_idProfissionalSaude,
      linkVideo,
      dataHoraTelemedicina,
      duracaoTelemedicina,
      statusTelemedicina
    ) VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      Paciente_idPaciente,
      ProfissionalSaude_idProfissionalSaude,
      linkVideo,
      dataHoraTelemedicina,
      duracaoTelemedicina,
      statusTelemedicina
    ],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({ message: 'Teleconsulta agendada com sucesso!' });
    }
  );
};
// Fazer uma listagem de teleconsultas marcadas 
exports.listarTeleconsultasSimples = (req, res) => {
  const query = `
    SELECT 
      idTelemedicina,
      Paciente_idPaciente,
      ProfissionalSaude_idProfissionalSaude,
      linkVideo,
      dataHoraTelemedicina,
      duracaoTelemedicina,
      statusTelemedicina
    FROM Telemedicina
    ORDER BY dataHoraTelemedicina ASC
  `;

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({ teleconsultas: results });
  });
};
