const express = require('express');
const frutasController = require('../controllers/frutasController');
const router = express.Router();

router.get('/', frutasController.obtenerFrutas);
router.post('/', frutasController.crearFruta);

module.exports = router;