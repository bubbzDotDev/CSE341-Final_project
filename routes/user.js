const express = require('express');
// const {
//     body
// } = require('express-validator/check');
const {
    body
} = require("express-validator");

const userController = require('../controllers/user');

const router = express.Router();


/**
 * Currently the POST route is working, and successfully adding recipes to the database. There is a seed of sample recipes in mongoDB that can be used for testing. 
 * 
 * Only uncomment your route when you have your controller working/during testing.
 */




//GET all users
// router.get('/users', userController.getUsers);

//POST add user
router.post('/add-user', userController.postAddUser);

//GET user by ID
// router.get('/users/:userId', userController.getUserById);

//PUT update user
// router.put('/edit-user/:userId', userController.putUpdateUser);

//DELETE recipe
// router.delete('/delete-user/:userId', userController.deleteUser);


module.exports = router;