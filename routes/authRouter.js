const router = require('express').Router()
const { signUpUser, loginUser } = require('../controllers/authController')


// Usuarios crea
router.post('/signup', signUpUser);

// Inicio de sesión
router.post('/login', loginUser);


module.exports = router
