const {Sequelize} = require('sequelize')
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  port: process.env.DB_PORT,
  logging: false
});

async function checkDB(){ // Esto checkea
  try {
      await sequelize.authenticate()
      console.log("Conexión a DB OK")
  } catch (error) {
      console.log(error)
  }
}

connection.connect((error) => {
  if (error) {
    console.error('Error de conexión:', error);
  } else {
    console.log('Conexión OK');
  }
});

module.exports = connection;