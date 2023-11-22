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
        estacion: {
            type: DataTypes.ENUM('primavera', 'verano', 'otoño', 'invierno'),
            allowNull: false,
        },
        mes: {
            type: DataTypes.ENUM('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'),
            allowNull: false,
        },
        Calorías: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Carbohidratos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Proteínas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Grasas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Vitaminas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
)

module.exports = Fruit