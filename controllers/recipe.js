const Recipe = require('../models/recipe')
//const isAuth = require('../middleware/is-auth')

exports.deleteRecipe = (req, res, next) => {
    //get recipie id, delete recipe,
    const recipeId = req.params.postID;
    console.log("made it here")
    Recipe.findById(recipeId)
    .then(recipe => {
        if (!recipe) {
            const error = new Error ('Could not find recipe.');
            error.statusCode = 404;
            throw error;
        }
        //Validate user ?

        return Recipe.findByIdAndRemove(recipeId);

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

  const recipe = new Recipe({
    title: title,
    serving: serving,
    cook_time,
    directions: directions,
    rating: rating
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
