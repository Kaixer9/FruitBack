const connection = require('../database');
/*
const obtenerUsuarioPorId = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = { obtenerUsuarioPorId };
*/
class Usuario {
    constructor(usuario) {
      this.usuario = usuario;
    }
  
    static crear(usuario, callback) {
      
    }
  
    static buscarPorNombre(nombre, callback) {
      
    }
  }
  
  module.exports = Usuario;
