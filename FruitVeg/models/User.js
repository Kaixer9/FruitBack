const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')


const User = sequelize.define(
	'user',
	{
		nick: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate:{
                isEmail: true,
            }
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('usuario', 'admin'),
            allowNull: false,
            defaultValue: "usuario"
        },
    },
    {timestamps: false}
)

module.exports = User
