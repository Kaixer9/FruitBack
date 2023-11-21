const router = require('express').Router()
const { signUpUser, loginUser } = require('../controllers/auth.controllers')


// Usuarios crea
router.post('/signupUser', signUpUser);

// Inicio de sesión
router.post('/loginUser', loginUser);


module.exports = router
