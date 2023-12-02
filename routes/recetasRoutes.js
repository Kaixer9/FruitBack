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

router.post('/',  createRecipe)
router.get('/', getAllRecipes) 
router.get('/:recetasId', getRecipe)

router.get('/:recetaId', getFruitRecipes)
// Traigo todas y luego filtro en el front

module.exports = router;
