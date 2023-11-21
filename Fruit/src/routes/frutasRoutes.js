const express = require('express');
const frutasController = require('../controllers/frutasController');
const { checkAdmin, checkUser } = require('../middlewares/auth.js')
const router = express.Router();

const { 
    
    getFruit,
    createFruit,
    updateFruit,
    deleteFruit,

     } = require('../controllers/frutasController.js')


router.get('/frutas', checkUser, getFruit)

router.post('/frutas', checkAdmin, createFruit)
router.put('/frutas/frutasId', checkAdmin, updateFruit) 
router.delete('/frutas/frutasId', checkAdmin, deleteFruit)

module.exports = router;