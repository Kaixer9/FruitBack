const router = require('express').Router()
const { signUpUser, loginUser, logoutUser } = require('../controllers/authController')


// Usuarios crea
router.post('/signup', signUpUser);

// Inicio de sesión
router.post('/login', loginUser);

router.post('/logout', logoutUser);


module.exports = router
