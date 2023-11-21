const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const connection = require('../database');


const User = sequelize.define(
	'usuarios',
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
    },
    {timestamps: false}
)
  
  module.exports = User;
