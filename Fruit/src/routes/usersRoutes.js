const router = require('express').Router()
const { checkAdmin, checkUser } = require('../middlewares/auth.js')

const { 
getAllUsers,
updateUser,
deleteUser,
getOwnProfile,
updateOwnProfile,
getSavedRecipes,
getOneUser,
 } = require('../controllers/userController.js')

//router.post('/user', checkUser, createUser) en el signup
router.get('/user/profile', checkUser, getOwnProfile)
router.put('/user/profile', checkUser, updateOwnProfile)
router.get('/user/recipe', checkUser, getSavedRecipes) // ver si hace falta o no

router.get('/user', checkAdmin, getAllUsers)
router.get('/user/:userId', checkAdmin, getOneUser)
router.put('/user/:userId', checkAdmin, updateUser) 
router.delete('/user/:userId', checkAdmin, deleteUser)



module.exports = router