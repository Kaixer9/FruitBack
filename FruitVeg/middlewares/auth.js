const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config()

const checkUser = async (req, res, next) => { //checkauth
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
            res.locals.user = user
                //console.log(res.locals)
            next()
        })
}
    function checkAdmin(req, res, next) {
    if (res.locals.role !== 'admin') {
        return res.status(401).send('Usuario no autorizado')  // Lo devuelve si no 'admin'
    } else {
        next()  // Si tiene el rol de admin, accede a la sig función de la ruta...
    }
}

    module.exports = {checkUser, checkAdmin}