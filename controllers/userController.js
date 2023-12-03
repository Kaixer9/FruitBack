const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


  async function getAllUsers(req, res) { //El admin mira todos los users
	try {
		const user = await User.findAll({
			where: req.query,
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (user) {
			return res.status(200).json(user)
		} else {
			return res.status(404).send('Usuario no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getUser(req, res) { // El admin busca un user
	try {
		const user = await User.findByPk(req.params.userId, {
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (user) {
			return res.status(200).json(user)
		} else {
			return res.status(404).send('Usuario no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}


  async function updateUser(req, res) { //El admin updatea al user
	try {
		const [userExist, user] = await User.update(req.body, {
			returning: true,
			where: {
				id: req.params.userId,
			},
		})
		if (userExist !== 0) {
			return res.status(200).json({ message: 'Usuario actualizado', user: user })
		} else {
			return res.status(404).send('Usuario no encontrado')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

  async function deleteUser(req, res) { //admin deletea a user
	try {
		const user = await User.destroy({
			where: {
				id: req.params.userId,
			},
		})
		if (user) {
			return res.status(200).send('Usuario borrado')
		} else {
			return res.status(404).send('Usuario no encontrado')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


  async function getOwnProfile(req, res) { //perfil de user normal
	try {
		const user = await User.findByPk(res.locals.user)

		if (user) {
			const message = `Hola ${user.nick}, este es tu perfil`

			return res.status(200).json({ message, user })
		} else {
			return res.status(404).send('Usuario no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}


  async function updateOwnProfile(req, res) { // actu perfil de user normal
	try {
		const user = await User.update(req.body, {
			where: {
				id: res.locals.user.id,
			}
		})
		if (user) {
			return res.status(200).json({ message: 'Usuario actualizado', user: user })
		} else {
			return res.status(404).send('Usuario no encontrado')
		}

	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function createUser(req, res) { // Para el admin
	try {

		const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
		const encrypted = bcrypt.hashSync(req.body.contraseña, salt)
		req.body.contraseña = encrypted

		const user = await User.create(req.body)
		return res.status(200).send(user)

	} catch (error) {
		res.status(500).send(error.message)
	}
}


module.exports = { getAllUsers, getUser, updateUser, deleteUser, getOwnProfile, updateOwnProfile, createUser };