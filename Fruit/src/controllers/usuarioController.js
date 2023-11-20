/*const User = require('../models/alumnos.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


async function getAllAlumnos(req, res) {
	try {
		const alumno = await Alumno.findAll({
			where: req.query,
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (alumno) {
			return res.status(200).json(alumno)
		} else {
			return res.status(404).send('No alumno found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneAlumno(req, res) {
	try {
		const alumno = await Alumno.findByPk(req.params.id, {
			attributes: {
				exclude: ['contraseña']
			}
		})
		if (alumno) {
			return res.status(200).json(alumno)
		} else {
			return res.status(404).send('Alumno not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnProfile(req, res) {
	try {
		const alumno = await Alumno.findByPk(res.locals.user.id)

		if (alumno) {
			const message = `Hi ${alumno.nombre}!, this is your profile`

			return res.status(200).json({ message, alumno })
		} else {
			return res.status(404).send('Alumno not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOwnTests(req, res) {
	try {
		const alumno = await Alumno.findByPk(res.locals.user.id, {
			include: Test
		})

		if (alumno) {
			const message = `Hi ${alumno.nombre}!, those are your tests.`

			return res.status(200).json({ message: message, test: alumno.tests })
		} else {
			return res.status(404).send('Test not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}



async function getOwnCursos(req, res) {
	try {
		const alumno = await Alumno.findByPk(res.locals.user.id, {
			include: Curso
		})

		if (alumno) {
			const message = `Hi ${alumno.nombre}!, those are your cursos.`
console.log(alumno)
			return res.status(200).json({ message: message, asignatura: alumno.curso })
		} else {
			return res.status(404).send('Cursos not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createAlumno(req, res) {
	try {

		const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
		const encrypted = bcrypt.hashSync(req.body.contraseña, salt)
		req.body.contraseña = encrypted

		const alumno = await Alumno.create(req.body)
		return res.status(200).send(alumno)

	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateOwnAlumno(req, res) {
	try {
		const alumno = await Alumno.update(req.body, {
			where: {
				id: res.locals.alumno.id,
			}
		})
		if (alumno) {
			return res.status(200).json({ message: 'Alumno updated', alumno: alumno })
		} else {
			return res.status(404).send('Alumno not found')
		}

	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function updateAlumno(req, res) {
	try {
		const [alumnoExist, alumno] = await Alumno.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (alumnoExist !== 0) {
			return res.status(200).json({ message: 'Alumno updated', alumno: alumno })
		} else {
			return res.status(404).send('Alumno not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteAlumno(req, res) {
	try {
		const alumno = await Alumno.destroy({
			where: {
				id: req.params.alumnoId,
			},
		})
		if (alumno) {
			return res.status(200).send('Alumno deleted')
		} else {
			return res.status(404).send('Alumno not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllAlumnos,
	getOwnProfile,
	getOwnTests,
	getOwnAsignaturas,
	getOwnCursos,
	getOneAlumno,
	createAlumno,
	updateAlumno,
	updateOwnAlumno,
	deleteAlumno
}*/

const connection = require('../../database');

const obtenerUsuario = async (req, res) => {
  // Obtener un usuario por ID deeesde MySQL
};

module.exports = { obtenerUsuario };


// En React, los controladores pueden ser funciones o componentes que manejan eventos o acciones específicas.

// User Signup/Login
const signUp = async (nick, email, password) => {
	// Lógica para realizar la solicitud POST a /auth/signup
	const response = await fetch('/auth/signup', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ nick, email, password }),
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, almacenar el token en el estado global o local storage
	console.log(data.token);
  };
  
  const login = async (email, password) => {
	// Lógica para realizar la solicitud POST a /auth/login
	const response = await fetch('/auth/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ email, password }),
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, almacenar el token en el estado global o local storage
	console.log(data.token);
  };
  
  // Admin
  const getAllUsers = async () => {
	// Lógica para realizar la solicitud GET a /user con token de administrador
	const response = await fetch('/user', {
	  method: 'GET',
	  headers: {
		Authorization: 'Bearer YOUR_ADMIN_TOKEN',
	  },
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, mostrar la lista de usuarios
	console.log(data);
  };
  
  const updateUser = async (userId, nick, email, password) => {
	// Lógica para realizar la solicitud PUT a /user/:userId con token de administrador
	const response = await fetch(`/user/${userId}`, {
	  method: 'PUT',
	  headers: {
		Authorization: 'Bearer YOUR_ADMIN_TOKEN',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ nick, email, password }),
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
	console.log(data.message);
  };
  
  const deleteUser = async (userId) => {
	// Lógica para realizar la solicitud DELETE a /user/:userId con token de administrador
	const response = await fetch(`/user/${userId}`, {
	  method: 'DELETE',
	  headers: {
		Authorization: 'Bearer YOUR_ADMIN_TOKEN',
	  },
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
	console.log(data.message);
  };
  
  // User Navigation
  const getHome = async () => {
	// Lógica para realizar la solicitud GET a /
	const response = await fetch('/', {
	  method: 'GET',
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, mostrar contenido de la página de inicio
	console.log(data);
  };
  
  const getOwnProfile = async () => {
	// Lógica para realizar la solicitud GET a /user/profile con token de usuario
	const response = await fetch('/user/profile', {
	  method: 'GET',
	  headers: {
		Authorization: 'Bearer YOUR_USER_TOKEN',
	  },
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, mostrar el perfil del usuario
	console.log(data.user);
  };
  
  const updateOwnProfile = async (nick, email, password) => {
	// Lógica para realizar la solicitud PUT a /user/profile con token de usuario
	const response = await fetch('/user/profile', {
	  method: 'PUT',
	  headers: {
		Authorization: 'Bearer YOUR_USER_TOKEN',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ nick, email, password }),
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
	console.log(data.message);
  };
  
  const getFrutas = async () => {
	// Lógica para realizar la solicitud GET a /frutas
	const response = await fetch('/frutas', {
	  method: 'GET',
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, mostrar la lista de frutas
	console.log(data);
  };
  
  const getRecetas = async () => {
	// Lógica para realizar la solicitud GET a /frutas/recetas con token de usuario
	const response = await fetch('/frutas/recetas', {
	  method: 'GET',
	  headers: {
		Authorization: 'Bearer YOUR_USER_TOKEN',
	  },
	});
  
	const data = await response.json();
	// Manejar la respuesta, por ejemplo, mostrar la lista de recetas
	console.log(data);
  };
// Modificar  