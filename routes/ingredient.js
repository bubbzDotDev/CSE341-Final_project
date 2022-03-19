const express = require('express');

const { body } = require("express-validator");

const ingredientController = require('../controllers/ingredient');

const router = express.Router();


/**
 * Currently the POST route is working, and successfully adding users to the database. There is a seed of sample recipes in mongoDB that can be used for testing. 
 * 
 * Only uncomment your route when you have your controller working/during testing.
 */




//GET all ingredients
router.get('/ingredient', ingredientController.getIngredient);

//POST add user
router.post('/add-ingredient', ingredientController.postAddIngredient);

//GET user by ID
// router.get('/users/:userId', userController.getUserById);

//PUT update user
// router.put('/edit-user/:userId', userController.putUpdateUser);

//DELETE recipe
// router.delete('/delete-user/:userId', userController.deleteUser);


module.exports = router;