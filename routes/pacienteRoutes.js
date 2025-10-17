// criacao da rota paciente
const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const authMiddleware = require('../middlewares/authMiddleware');

// cadastrar paciente
router.post('/', authMiddleware, pacienteController.cadastrarPaciente);
// deletar paciente atraves do id
router.delete('/:id', authMiddleware, pacienteController.removerPaciente);
// listar pacientes
router.get('/', authMiddleware, pacienteController.listarPacientes);

module.exports = router;
