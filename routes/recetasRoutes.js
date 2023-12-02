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

router.put('/:recetasId', checkAdmin, updateRecipe)
router.delete('/:recetasId', checkAdmin, deleteRecipe)

router.post('/:frutaId/recetas',  createRecipe)
router.get('/', getAllRecipes) 
router.get('/:recetasId', getRecipe)

router.get('/:recetaId', getFruitRecipes)

module.exports = router;
