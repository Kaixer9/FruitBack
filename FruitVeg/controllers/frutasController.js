const Fruit = require ('../models/Fruta.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function getAllFruits(req, res) { // el user sin token
	try {
		const fruit = await Fruit.findAll({
			where: req.query,
			attributes: {
			}
		})
		if (fruit) {
			return res.status(200).json(fruit)
		} else {
			return res.status(404).send('Fruta no encontrada')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
};

async function getFruit(req, res) { // El user sin token
	try {
		const fruit = await Fruit.findByPk(req.params.fruitId, {
			attributes: {
			}
		})
		if (fruit) {
			return res.status(200).json(fruit)
		} else {
			return res.status(404).send('Fruta no encontrada')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createFruit(req, res) { // el admin
	try {
		const fruit = await Fruit.create(req.body)
		return res.status(200).json({ message: 'Fruta creada', fruit: fruit })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateFruit(req, res) { // el admin
	try {
		const [fruitExist, fruit] = await Fruit.update(req.body, {
			returning: true,
			where: {
				id: req.params.fruitId,
			},
		})
		if (fruitExist !== 0) {
			return res.status(200).json({ message: 'Fruta actualizada', fruit: fruit })
		} else {
			return res.status(404).send('Fruta no encontrada')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteFruit(req, res) { // el admin
	try {
		const fruit = await Fruta.destroy({
			where: {
				id: req.params.fruitId,
			},
		})
		if (fruit) {
			return res.status(200).send('Fruta borrada')
		} else {
			return res.status(404).send('Fruta no encontrada')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = { getAllFruits, getFruit, createFruit, updateFruit, deleteFruit }