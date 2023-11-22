const router = require('express').Router()
const { checkAdmin, checkUser } = require('../middlewares/auth.js')


const { 
    getRecipe,
    getAllRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
     } = require('../controllers/recetasController.js')

router.put('/frutas/:recetasId', checkAdmin, updateRecipe)
router.delete('/frutas/:recetasId', checkAdmin, deleteRecipe)
router.get('/frutas/:recetasId', checkAdmin, getRecipe)

router.post('/frutas/recetas', checkUser, createRecipe)
router.get('/frutas/recetas', checkUser, getAllRecipes) // Traigo todas y luego filtro en el front


module.exports = router;
