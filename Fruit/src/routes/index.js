const router = require('express').Router()
const { checkAuth } = require("../middlewares/auth");

router.use('/auth', require('./auth.router'))

router.use('/user', require('./user'))
router.use('/frutas', require('./frutas'))

module.exports = router