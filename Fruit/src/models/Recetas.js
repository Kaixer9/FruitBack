const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')
const connection = require('../database');

const Recipe = sequelize.define(
    'recetas',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredientes: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        preparación: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
    {timestamps: true}
)

module.exports = Recipe