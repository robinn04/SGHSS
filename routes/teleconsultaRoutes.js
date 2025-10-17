const express = require('express');
const router = express.Router();
const teleconsultaController = require('../controllers/teleconsultaController');
const authMiddleware = require('../middlewares/authMiddleware');

// agendar uma teleconsulta
router.post('/', authMiddleware, teleconsultaController.agendarTeleconsulta);
// lista todas as teleconsultas armazendas no banco de dado
router.get('/simples', authMiddleware, teleconsultaController.listarTeleconsultasSimples);



module.exports = router;
