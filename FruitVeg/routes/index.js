const router = require('express').Router()
const { checkAuth } = require("../middlewares/auth.js");


router.use('/auth', require('./authRouter'))

router.use('/user', require('./usersRoutes'))
router.use('/frutas', require('./frutasRoutes'))
router.use('/recetas', require('./recetasRoutes'))

module.exports = router