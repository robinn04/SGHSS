const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');
const authMiddleware = require('../middlewares/authMiddleware');

// lista o estoque e suprimentos nele
router.get('/', authMiddleware, estoqueController.listarEstoquesComSuprimentos);

module.exports = router;
