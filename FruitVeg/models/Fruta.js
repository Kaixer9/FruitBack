const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Fruit = sequelize.define(
    'fruit',
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        grupo: {
            type: DataTypes.ENUM('fruta', 'verdura'),
            allowNull: false,
        },
        estación: {
            type: DataTypes.ENUM('primavera', 'verano', 'otoño', 'invierno'),
            allowNull: false,
        },
        mes_inicio: {
            type: DataTypes.ENUM('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'),
            allowNull: false,
        },
        mes_fin: {
            type: DataTypes.ENUM('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'),
            allowNull: false,
        },
        calorías: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carbohidratos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        proteínas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        grasas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vitaminas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
)

module.exports = Fruit