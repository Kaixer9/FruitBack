const router = require('express').Router()
const { checkAdmin, checkUser} = require('../middlewares/auth.js')


const { 
    
    getAllFruits,
    getFruit,
    createFruit,
    updateFruit,
    deleteFruit,

     } = require('../controllers/frutasController.js')


router.post('/frutas', checkAdmin, createFruit)
router.put('/frutas/frutasId', checkAdmin, updateFruit)
router.delete('/frutas/frutasId', checkAdmin, deleteFruit)

router.get('/frutas', getAllFruits) // Traigo todas y luego filtro en el front
router.get('/frutas/frutasId', getFruit) // por Id para pillar una

module.exports = router;
