//criacao da rota funcionario
const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');
const authMiddleware = require('../middlewares/authMiddleware');

// casdastro do funcionario
router.post('/', authMiddleware, funcionarioController.cadastrarFuncionario);
// remover funcionario
router.delete('/:id', authMiddleware, funcionarioController.removerFuncionario);
// listar funcionarios
router.get('/', authMiddleware, funcionarioController.listarFuncionarios);


module.exports = router;
