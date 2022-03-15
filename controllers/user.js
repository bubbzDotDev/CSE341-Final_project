const User = require('../models/user');
const {
  validationResult
} = require('express-validator/check');


/**
 * Added comments for each controller export to be placed. 
 * Make sure you un-comment your route in the /routes/user.js before testing.
 */


//GET users
// exports.getRecipes = (req, res, next) => {
//   Recipe.find()
//     .then(recipes => {
//       res.send(recipes); // TODO: May need pagination
//     })
//     .catch(error => {
//       return res.status(500).send(error);
//     });
// }

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
// exports.getRecipeById = (req, res, next) => {
//   Recipe.findById(req.params.recipeId)
//     .then(recipe => {
//       res.send(recipe);
//     })
//     .catch(error => {
//       return res.status(500).send(error);
//     });
// }

//PUT user by ID

//DELETE user by ID