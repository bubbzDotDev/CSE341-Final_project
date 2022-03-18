const Recipe = require('../models/recipe');
const {
  validationResult
} = require('express-validator/check');

const mongoose = require('mongoose');


/**
 * Added comments for each controller export to be placed. 
 * Make sure you un-comment your route in the /routes/recipe.js before testing.
 */


//GET recipes
exports.getRecipes = (req, res, next) => {
  Recipe.find()
    .then(recipes => {
      res.send(recipes); // TODO: May need pagination
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

//POST recipe
exports.postAddRecipe = (req, res, next) => {
  const title = req.body.title;
  const serving = req.body.serving;
  const cook_time = req.body.cook_time;
  const ingredient_list = req.body.ingredient_list;
  const directions = req.body.directions;
  const rating = req.body.rating;
  const creator = mongoose.Types.ObjectId(req.body.creator);

  let ingredientObjArray = ingredient_list.map(s => mongoose.Types.ObjectId(s));

  const recipe = new Recipe({
    title: title,
    serving: serving,
    cook_time: cook_time,
    ingredient_list: ingredientObjArray,
    directions: directions,
    rating: rating,
    creator: creator
  });

  recipe.save()
    .then(result => {
      console.log('created recipe');
      res.send(recipe);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

//GET recipe by ID
exports.getRecipeById = (req, res, next) => {
  Recipe.findById(req.params.recipeId)
    .then(recipe => {
      res.send(recipe);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

//PUT recipe by ID

//DELETE recipe by ID