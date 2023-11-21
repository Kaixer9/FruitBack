const connection = require('../../database/index.js');
const Fruit = require('../models/Fruta.js');


async function getAllFruits(req, res) {
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

async function createFruit(req, res) {
	try {
		const fruit = await Fruit.create(req.body)
		return res.status(200).json({ message: 'Fruta creada', fruit: fruit })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateFruit(req, res) {
	try {
		const [testExist, test] = await Fruit.update(req.body, {
			returning: true,
			where: {
				id: req.params.testId,
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

async function deleteFruit(req, res) {
	try {
		const fruit = await Fruta.destroy({
			where: {
				id: req.params.id,
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

module.exports = { getAllFruits, createFruit, updateFruit, deleteFruit }