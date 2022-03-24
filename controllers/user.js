const User = require('../models/user');
const { validationResult } = require('express-validator');


/**
 * Added comments for each controller export to be placed. 
 * Make sure you un-comment your route in the /routes/user.js before testing.
 */

//POST user
exports.postAddUser = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username,
    password: password
  });

  user.save()
    .then(result => {
      console.log('created user');
      res.send(user);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

//GET user by ID
exports.getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => {
      res.send(user);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

//PUT user by ID
exports.putUpdateUser = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const userId = req.params.userId;
  console.log(userId);

  User.findById(userId)
  .then(user => {
    if (!user) {
      const error = new Error('Could not find user');
      error.statusCode = 404;
      throw error;
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.username = username;
    user.password = password;

    return user.save();
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

//DELETE user by ID

exports.deleteUser = (req, res, next) => {
  
  User.findById(req.params.userId)
  .then(user => {
      if (!user) {
          const error = new Error ('Could not find User.');
          console.log ("No user found")
          error.statusCode = 404;
          throw error;
      }
      

      return User.findByIdAndRemove(req.params.userId);

  })
  .then(result => {
      console.log(result);
      res.status(200).json({message: 'Deleted user. '});
  })
  .catch(err => {
      if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  });

};