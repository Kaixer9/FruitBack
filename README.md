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

METHOD | ENDPOINT         | TOKEN | ROLE  | DESCRIPTION              | POST PARAMS                                               | RETURNS
-------|------------------|-------|-------|--------------------------|-----------------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user  | User Signup              | `nick`, `email`, `contraseña`                             | { token: `token` }
POST   | /auth/login      | -     | user  | User Login               | `email`, `contraseña`                                     | { token: `token` }

### Admin

METHOD | ENDPOINT            | TOKEN | ROLE     | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|---------------------|-------|----------|--------------------------|-------------------------------------------------|--------------------
GET    | /user               | YES   | admin    | Get All Users            | `query params`                                  | [{user}]
PUT    | /user/:userId       | YES   | admin    | Update user              | `nick`, `email`, `contraseña`                   | {message: 'user updated'}
DELETE | /user/:userId       | YES   | admin    | Delete user              |                                                 | {message: 'user deleted'}

### User navigation

METHOD | ENDPOINT            | TOKEN | ROLE     | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|---------------------|-------|----------|--------------------------|-------------------------------------------------|--------------------
GET    | /                   | NO    | user     | Get Home                 |                                                 |
GET    | /user/profile       | YES   | user     | Get Own Profile          |                                                 | {user}
PUT    | /user/profile       | YES   | user     | Update Own Profile       | `nick`, `email`, `contraseña`                 | {message: 'user updated'}
GET    | /frutas             | NO    | user     | Get frutas               |                                                 | [{frutas}]
GET    | /frutas/recetas     | YES   | user     | Get recetas              |                                                 | [{recetas}]
