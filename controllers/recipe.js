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
  const creator = req.userId;
  //console.log(creator);

  let ingredientObjArray = ingredient_list.map(s => mongoose.Types.ObjectId(s));
  //console.log(ingredientObjArray);

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
exports.putUpdateRecipe = (req, res, next) => {
  const recipeID = req.params.recipeId;
  const title = req.body.title;
  const serving = req.body.serving;
  const cook_time = req.body.cook_time;
  const directions = req.body.directions;
  const rating = req.body.rating;
  const creator = req.userId;
  //console.log(creator);

  Recipe.findById(recipeID)
  .then(recipe => {
    if (!recipe) {
      const error = new Error('Could not find recipe');
      error.statusCode = 404;
      throw error;
    }

    //console.log(recipe.creator.toString());
    //console.log(creator);

    if (recipe.creator.toString() !== creator) {
      const error = new Error('User not authorized');
      error.statusCode = 403;
      throw error;
    }
    recipe.title = title;
    recipe.serving = serving;
    recipe.cook_time = cook_time;
    recipe.directions = directions;
    recipe.rating = rating;

    return recipe.save();
  })
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  })
};

//DELETE recipe by ID
exports.deleteRecipe = (req, res, next) => {
  const creator = req.userId;

  //get recipie id, delete recipe,
  Recipe.findById(req.params.recipeId)
  .then(recipe => {
      if (!recipe) {
          const error = new Error ('Could not find recipe.');
          error.statusCode = 404;
          throw error;
      }
      //Authorize user
      if (recipe.creator.toString() !== creator) {
        const error = new Error('User not authorized');
        error.statusCode = 403;
        throw error;
      }

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
