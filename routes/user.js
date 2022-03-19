const express = require('express');
const { body } = require("express-validator");

const userController = require('../controllers/user');

const router = express.Router();

// // PUT request to allow editing on a user profile.
// router.put(
//     'userEdit/:userId', userController.updateUser
// );

/**
 * There is a seed of sample recipes in mongoDB that can be used for testing. 
 * 
 * Only uncomment your route when you have your controller working/during testing.
 */

//POST add user
router.post('/add-user', userController.postAddUser);

//GET user by ID
router.get('/users/:userId', userController.getUserById);

//PUT update user
// router.put('/edit-user/:userId', userController.putUpdateUser);

//DELETE recipe
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;