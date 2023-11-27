const User = require('../models/User')
const Fruit = require('../models/Fruta')
const Recipe = require('../models/Recetas')


function setRelations(){
    try {
        
        User.hasMany(Recipe)
        Recipe.belongsTo(User)

        Fruit.hasMany(Recipe)
        Recipe.belongsTo(Fruit)
        

        console.log("Relations added")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }