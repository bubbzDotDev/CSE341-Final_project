const Recipe = require('../models/recipe');
const {
  validationResult
} = require('express-validator/check');


/**
 * Added comments for each controller export to be placed. 
 * Make sure you un-comment your route in the /routes/recipe.js before testing.
 */


//GET recipes

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

//PUT recipe by ID

//DELETE recipe by ID