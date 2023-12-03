const Recipe = require("../models/Recetas.js");
const Fruit = require("../models/Fruta.js");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function getRecipe(req, res) {
  // user
  try {
    const recipe = await Recipe.findByPk(req.params.recetasId, {
      attributes: {},
      include: User,
    });
    if (recipe) {
      return res.status(200).json(recipe);
    } else {
      return res.status(404).send("Receta no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getFruitRecipes(req, res) {
  try {
    const recipes = await Recipe.findAll({
      where: { fruitId: req.params.frutaId },
    });
    if (recipes) {
      return res.status(200).json(recipes);
    } else {
      return res.status(404).send("No se encontraron recetas");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getAllRecipes(req, res) {
  // user
  try {
    const recipe = await Recipe.findAll({
      where: req.query,
    });
    if (recipe) {
      return res.status(200).json(recipe);
    } else {
      return res.status(404).send("No se encontraron recetas");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createRecipe(req, res) { // user
 console.log(req.body)
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(200).json({ message: "Receta creada", recipe: recipe });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateRecipe(req, res) { //admin
 
  try {
    const [recipeExist, recipe] = await Recipe.update(req.body, {
      returning: true,
      where: {
        id: req.params.recetasId,
      },
    });
    if (recipeExist !== 0) {
      return res
        .status(200)
        .json({ message: "Receta actualizada", recipe: recipe });
    } else {
      return res.status(404).send("Receta no encontrada");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteRecipe(req, res) {
  //admin
  try {
    const recipe = await Recipe.destroy({
      where: {
        id: req.params.recetasId,
      },
    });
    if (recipe) {
      return res.status(200).send("Receta borrada");
    } else {
      return res.status(404).send("Receta no encontrada");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getRecipe,
  getFruitRecipes,
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
