const express = require('express');

const { body } = require("express-validator");

const isAuth = require('../middleware/is-auth');

const ingredientController = require('../controllers/ingredient');

const router = express.Router();

//GET all ingredients
router.get('/ingredient', ingredientController.getIngredient);

//POST add ingredient
router.post('/add-ingredient', isAuth, ingredientController.postAddIngredient);

//GET ingredient by ID
router.get('/ingredient/:ingredientId', ingredientController.getIngredientById);

//PUT update ingredient
router.put('/edit-ingredient/:ingredientId', isAuth, ingredientController.putIngredientById);

//DELETE ingredient
router.delete('/delete-ingredient/:ingredientId', isAuth, ingredientController.deleteIngredientById);

module.exports = router;
