const router = require('express').Router()
const { checkAdmin, checkUser } = require('../middlewares/auth.js')


const { 
    getRecipe,
    getFruitRecipes,
    getAllRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
     } = require('../controllers/recetasController.js')

router.put('/:recetasId', updateRecipe)
router.delete('/:recetasId', deleteRecipe)

router.post('/',  createRecipe)
router.get('/', getAllRecipes) 
router.get('/:recetasId', getRecipe)

router.get('/frutas/:frutaId', getFruitRecipes)

module.exports = router;
