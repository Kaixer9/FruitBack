const jwt = require('jsonwebtoken')
const User = require('../models/User.model')
require('dotenv').config()

const checkUser = async (req, res, next) => { //checkauth (ver si logeados)
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
        })
    }
    