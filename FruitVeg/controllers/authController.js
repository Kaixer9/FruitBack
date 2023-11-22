const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();



const signUpUser = async (req, res) => {
    try {
        
        const payload = { email: req.body.email }
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
        const encrypted = bcrypt.hashSync(req.body.contraseña, salt)
        req.body.contraseña = encrypted

        const user = await User.create(req.body)
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
        return res.status(200).json({ token })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!user) {
            return res.status(404).json({ message: 'Error: Wrong Email or Password' })
        }

        const comparePassword = bcrypt.compareSync(req.body.contraseña, user.contraseña)
        if (comparePassword) {
            const payload = { email: user.email }
            const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
            return res.status(200).json({ token })
        } else {
            return res
                .status(404)
                .json({ message: "Error: Wrong Email or Password" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { signUpUser, loginUser };