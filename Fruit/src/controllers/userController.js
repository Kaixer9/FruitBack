const User = require('../models/User.js')
const connection = require('../../database/index.js');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
  // en modelos importar el squalize para el findAll porque findAll es de sequalize y puunto

  async function getAllUsers(req, res) { //El admin mira todos los users
	try {
		const user = await User.findAll({
			where: req.query,
			attributes: {
			}
		})
		if (user) {
			return res.status(200).json(User)
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
				id: req.params.id,
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
		const user = await User.findByPk(res.locals.user.id)

		if (user) {
			const message = `Hola ${user.nombre}!, este es tu perfil`

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


module.exports = { getAllUsers, updateUser, deleteUser, getOwnProfile, updateOwnProfile };