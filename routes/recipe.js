const express = require('express');


const router = express.Router();
const recipeController = require('../controllers/recipe');

const { body } = require("express-validator");

const isAuth = require('../middleware/is-auth');

/**
 * Currently the POST route is working, and successfully adding recipes to the database. There is a seed of sample recipes in mongoDB that can be used for testing. 
 * 
 * Only uncomment your route when you have your controller working/during testing.
 */

//GET all recipes
router.get('/recipes', recipeController.getRecipes);

//POST add recipe
router.post('/add-recipe', recipeController.postAddRecipe);

//GET recipe by ID
router.get('/recipes/:recipeId', recipeController.getRecipeById);

//PUT update recipe by ID
router.put('/edit-recipe/:recipeId', isAuth, recipeController.putUpdateRecipe);

//DELETE recipe
router.delete('/delete-recipe/:recipeId', isAuth, recipeController.deleteRecipe);

module.exports = router;