const db = require('../models/bancoDados');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
  const { usuario, senha, nomeAdministrador, cpfAdministrador, nivelAcesso } = req.body;
// sing up e o login
  const hashedPassword = bcrypt.hashSync(senha, 8);
// Criptografa a senha antes de salvar no banco.
  db.query(
    'INSERT INTO Login (usuario, senha, tipoUsuario, statusLogin) VALUES (?, ?, ?, ?)',
    [usuario, hashedPassword, 'administrador', true],
    (err, loginResult) => {
      if (err) return res.status(500).json({ error: err.message });

      const idLogin = loginResult.insertId;

      db.query(
        'INSERT INTO Administrador (Login_idLogin, nomeAdministrador, cpfAdministrador, nivelAcesso) VALUES (?, ?, ?, ?)',
        [idLogin, nomeAdministrador, cpfAdministrador, nivelAcesso],
        (err) => {
          if (err) return res.status(500).json({ error: err.message });
          res.status(201).json({ message: 'Administrador cadastrado com sucesso!' });
        }
      );
    }
  );
};

exports.login = (req, res) => {
  const { usuario, senha } = req.body;

  db.query(
    'SELECT * FROM Login WHERE usuario = ? AND tipoUsuario = "administrador"',
    [usuario],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ error: 'Administrador não encontrado' });
// Compara a senha digitada com a hash salva no banco
      const user = results[0];
      const senhaValida = bcrypt.compareSync(senha, user.senha);

      if (!senhaValida) return res.status(401).json({ error: 'Senha inválida' });
// Esse token será usado para acessar rotas protegidas.
      const token = jwt.sign(
        { idLogin: user.idLogin, tipoUsuario: user.tipoUsuario },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.json({ message: 'Login realizado com sucesso', token });
    }
  );
};
