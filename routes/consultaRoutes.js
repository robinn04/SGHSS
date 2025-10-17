// criacao da rota consulta
const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');
const authMiddleware = require('../middlewares/authMiddleware');

// agendamento de consultas
router.post('/', authMiddleware, consultaController.agendarConsulta);
// listar consultas
router.get('/simples', authMiddleware, consultaController.listarConsultasSimples);



module.exports = router;
