const Ingredient = require('../models/ingredient');
const { validationResult } = require('express-validator');

/**
 * Added comments for each controller export to be placed. 
 * Make sure you un - comment your route in the /routes/ingredient.js before testing.
 */


//GET ingredient
exports.getIngredient = (req, res, next) => {
  Ingredient.find()
    .then(ingredients => {
      res.send(ingredients); // TODO: May need pagination
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

//POST ingredient
exports.postAddIngredient = (req, res, next) => {
  const qty = req.body.qty;
  const measurement = req.body.measurement;
  const item = req.body.item;
  const notes = req.body.notes;

  const ingredient = new Ingredient({
    qty: qty,
    measurement: measurement,
    item: item,
    notes: notes
  });

  ingredient.save()
    .then(result => {
      console.log('created ingredient');
      res.send(ingredient);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

//GET ingredient by ID
exports.getIngredientById = (req, res, next) => {
  Ingredient.findById(req.params.ingredientId)
    .then(ingredient => {
      res.send(ingredient);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}



//PUT recipe by ID

//DELETE recipe by ID