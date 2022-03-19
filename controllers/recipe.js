const Recipe = require('../models/recipe')
//const isAuth = require('../middleware/is-auth')



const { validationResult } = require('express-validator');

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
exports.deleteRecipe = (req, res, next) => {
  //get recipie id, delete recipe,
  Recipe.findById(req.params.recipeId)
  .then(recipe => {
      if (!recipe) {
          const error = new Error ('Could not find recipe.');
          console.log ("no recipe found")
          error.statusCode = 404;
          throw error;
      }
      //Validate user ?

      return Recipe.findByIdAndRemove(req.params.recipeId);

  })
  .then(result => {
      console.log(result);
      res.status(200).json({message: 'Deleted recipe. '});
  })
  .catch(err => {
      if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  });
  
};
