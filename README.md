# Proyecto VerFrutas

Introducción:

Proyecto destinado a ayudar al consumidor elegir las frutas y verduras de temporada haciendo una compra responsable.

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
GET    | /user              | YES   | admin    | Get All Users         | `query params`                               | [{users}]
PUT    | /user/:userId      | YES   | admin    | Update user           | `nick`, `email`, `contraseña`                | {message: 'user updated'}
DELETE | /user/:userId      | YES   | admin    | Delete user           |                                              | {message: 'user deleted'}
GET    | /user/profile      | YES   | user     | Get Own Profile       |                                              | {user}
PUT    | /user/profile      | YES   | user     | Update Own Profile    | `nick`, `email`, `contraseña`                | {message: 'user updated'}

### Frutas y verduras

METHOD | ENDPOINT           | TOKEN | ROLE     | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|--------------------|-------|----------|-----------------------|----------------------------------------------|--------------------
GET    | /frutas            | NO    | user     | Get All fruits        |                                              | [{fruits}]
GET    | /frutas/:frutasId  | NO    | user     | Get fruits            |                                              | [{fruits}]
POST   | /frutas            | YES   | admin    | Create fruits         |                                              | {message: 'fruit created'}
PUT    | /frutas/:frutasId  | YES   | admin    | Update fruits         |                                              | {message: 'fruit updated'}
DELETE | /frutas/:frutasId  | YES   | admin    | Delete fruits         |                                              | {message: 'fruit deleted'}


### Recetas

METHOD | ENDPOINT           | TOKEN | ROLE     | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|--------------------|-------|----------|-----------------------|----------------------------------------------|--------------------
PUT    | /recetas/:recetasId | YES   | admin    | Update recipe         |                                              | {message: 'recipe updated'}
DELETE | /recetas/:recetasId | YES   | admin    | Delete recipe         |                                              | {message: 'recipe deleted'}
POST   | /recetas    | YES   | user     | Create recipe         |                                              | {message: 'recipe created'}
GET    | /recetas    | YES   | user     | Get All recipes       |                                              | [{recipes}]
GET    | /recetas/recetasId  | YES   | user     | Get recipes           |                                              | [{recipes}]
