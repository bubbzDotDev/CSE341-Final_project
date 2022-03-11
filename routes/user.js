const express = require('express');
const {
    body
} = require('express-validator/check');

const userController = require('../controllers/user');

const router = express.Router();

// PUT request to allow editing on a user profile.
// router.put(
//     'userEdit/:userId', userController.updateUser
// );

module.exports = router;