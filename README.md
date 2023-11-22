# Proyecto VerFrutas

Introducción:

Proyecto destinado a ayudar al consumidor elegir las drutas y verduras de temporada haciendo una compra responsable.

Funciones:
* El usuario podrá registrarse y loguearse,
* ver y elegir las frutas y verduras por temporada o nombre,
* ver los valores nutricionales,
* comentar recetas para otros usuarios.

### Endpoints

### User Signup/Login

METHOD | ENDPOINT           | TOKEN | ROLE  | DESCRIPTION              | POST PARAMS                                  | RETURNS
-------|--------------------|-------|-------|--------------------------|----------------------------------------------|--------------------
POST   | /auth/signup       | -     | user  | User Signup              | `nick`, `email`, `contraseña`                | { token: `token` }
POST   | /auth/login        | -     | user  | User Login               | `email`, `contraseña`                        | { token: `token` }

### Admin & User navigation

METHOD | ENDPOINT           | TOKEN | ROLE     | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|--------------------|-------|----------|-----------------------|----------------------------------------------|--------------------
GET    | /user              | YES   | admin    | Get All Users         | `query params`                               | [{user}]
PUT    | /user/:userId      | YES   | admin    | Update user           | `nick`, `email`, `contraseña`                | {message: 'user updated'}
DELETE | /user/:userId      | YES   | admin    | Delete user           |                                              | {message: 'user deleted'}
GET    | /user/profile      | YES   | user     | Get Own Profile       |                                              | {user}
PUT    | /user/profile      | YES   | user     | Update Own Profile    | `nick`, `email`, `contraseña`                | {message: 'user updated'}

### Frutas y verduras

METHOD | ENDPOINT           | TOKEN | ROLE     | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|--------------------|-------|----------|-----------------------|----------------------------------------------|--------------------
GET    | /frutas            | YES   | admin    | Get All fruits        |                                              | [{fruits}]
POST   | /frutas            | YES   | admin    | Create fruits         |                                              | {message: 'fruit created'}
PUT    | /frutas            | YES   | admin    | Update fruits         |                                              | {message: 'fruit updated'}
DELETE | /frutas            | YES   | admin    | Delete fruits         |                                              | {message: 'fruit deleted'}
GET    | /frutas/:frutasId  | NO    | user     | Get fruits            |                                              | [{fruits}]

### Recetas

METHOD | ENDPOINT           | TOKEN | ROLE     | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|--------------------|-------|----------|-----------------------|----------------------------------------------|--------------------
PUT    | /frutas/:recetasId | YES   | admin    | Update recipe         |                                              | {message: 'recipe updated'}
DELETE | /frutas/:recetasId | YES   | admin    | Delete recipe         |                                              | {message: 'recipe deleted'}
GET    | /frutas/recetas    | YES   | user     | Get recipes           |                                              | [{recipes}]
POST   | /frutas/recetas    | YES   | user     | Create recipe         |                                              | {message: 'recipe created'}
