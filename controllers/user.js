const User = require('../models/user');
const {
  validationResult
} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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
  bcrypt  
  .hash(password, 12)
  .then(hashedPw => {
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: hashedPw
    });
    return user.save();

  })

    .then(result => {
      res.status(201).json({ message: 'User created!', userId: result._id });
      
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
    
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
        const error = new Error('Could not find User.');
        console.log("No user found")
        error.statusCode = 404;
        throw error;
      }


      return User.findByIdAndRemove(req.params.userId);

    })
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Deleted user. '
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });

};
//POST login User
exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  
  User.findOne({
      email: email
    })
    .then(user => {
      
      if (!user) {
        const error = new Error(' Username or password were invalid');
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
        
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {

      if (!isEqual) {
        const error = new Error('Wrong password or username')
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign({
        email: loadedUser.email,
        userId: loadedUser._id.toString(),
      }, 'somesupersecretstring', {
        expiresIn: '1h'
      });

      res.header('Authorization', 'Bearer '+ token);

      res.status(200).json({
        token: token,
        userId: loadedUser._id.toString()
      });

    }).catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};