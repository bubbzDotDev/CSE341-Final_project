const express = require('express');
const { body } = require('express-validator');

const recipeController = require('../controllers/recipe');

const router = express.Router();

// PUT request to allow editing on a recipe.
// router.put(
//     'admin/recipe/:recipeId', recipeController.updateRecipe
// );
//DELETE recipe

router.delete('/delete-recipe/:recipeId', recipeController.deleteRecipe);

module.exports = router;