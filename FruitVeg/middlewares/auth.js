const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config()

const checkUser = async (req, res, next) => { //checkauth (cheko si logeado)
    if (!req.headers.authorization) {
        return res.status(401).send('Token not found')
    }

    jwt.verify(req.headers.authorization, process.env.SECRET,
        async (error, payload) => {
            if (error) {
                return res.status(401).send('Token not valid')
            }

            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            })
            if (!user) {
                return res.status(404).send('Usuario no encontrado')
            }
            next()
        })
}
    function checkAdmin(req, res, next) {
    if (res.locals.user.role !== 'admin') {
        return res.status(401).send('Usuario no autorizado')  // Return error for any role different from 'admin'
    } else {
        next()  // SI tiene el rol de admin, accede a la sig función de la ruta...
    }
}

// La función del rol de admin es así? ah

    module.exports = {checkUser, checkAdmin}