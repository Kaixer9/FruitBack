const router = require('express').Router()
const { signUpUser, loginUser } = require('../controllers/authController')


// Usuarios crea
router.post('/signupUser', signUpUser);

// Inicio de sesión
router.post('/loginUser', loginUser);


module.exports = router
