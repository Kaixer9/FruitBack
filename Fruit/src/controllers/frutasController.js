const connection = require('../database');

/*const obtenerFrutas = async (req, res) => {
  // dame lista frutitas
};

const crearFruta = async (req, res) => {
  // suma frutitas
};

module.exports = { obtenerFrutas, crearFruta };*/

const database = require('../../database');

const obtenerFrutas = (req, res) => {
  database.query('SELECT * FROM Frutas', (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error interno' });
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { obtenerFrutas };