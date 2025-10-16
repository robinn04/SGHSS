const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/autorizacaoMiddleware');

//POST /api/admin/signup
router.post('/signup', adminController.signup);
//POST /api/admin/login
router.post('/login', adminController.login);

//rota protegida
router.get('/perfil', authMiddleware, (req, res) => {
  res.json({ message: `Bem-vindo, administrador ${req.user.idLogin}` });
});

module.exports = router;
