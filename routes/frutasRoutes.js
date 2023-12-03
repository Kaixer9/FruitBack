const router = require('express').Router()
const { checkAdmin, checkUser} = require('../middlewares/auth.js')


const { 
    
    getAllFruits,
    getFruit,
    createFruit,
    updateFruit,
    deleteFruit,

     } = require('../controllers/frutasController.js')


router.post('/', checkAdmin, createFruit)
router.put('/:frutasId',00000 updateFruit)
router.delete('/:frutasId', checkAdmin, deleteFruit)

router.get('/', getAllFruits) // Traigo todas y luego filtro en el front
router.get('/:frutasId', getFruit) // por Id para pillar una

module.exports = router;
