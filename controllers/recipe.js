const Recipe = require('../models/recipe');
const {
  validationResult
} = require('express-validator/check');


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
  const directions = req.body.directions;
  const rating = req.body.rating;
  const userID = req.body.userId;

  const recipe = new Recipe({
    title: title,
    serving: serving,
    cook_time,
    directions: directions,
    rating: rating,
    userId: userID
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
  //console.log(recipeID);

  Recipe.findById(recipeID)
  .then(recipe => {
    if (!recipe) {
      const error = new Error('Could not find recipe');
      error.statusCode = 404;
      throw error;
    }
    if (recipe.creator.toString() !== req.userID) {
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