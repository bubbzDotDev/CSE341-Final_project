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
exports.putIngredientById = (req, res, next) => {
  const qty = req.body.qty;
  const measurement = req.body.measurement;
  const item = req.body.item;
  const notes = req.body.notes;
  const ingredientId = req.params.ingredientId;
  console.log(ingredientId);

  Ingredient.findById(ingredientId)
  .then(ingredient => {
    if (!ingredient) {
      const error = new Error('Could not find ingredient');
      error.statusCode = 404;
      throw error;
    }

    ingredient.qty = qty;
    ingredient.measurement = measurement;
    ingredient.item = item;
    ingredient.notes = notes;

    return ingredient.save();
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

//DELETE ingredient by ID
exports.deleteIngredientById = (req, res, next) => {
  Ingredient.findById(req.params.ingredientId)
    .then(ingredient => {
      // res.send(ingredient);
      if (!ingredient) {
        const error = new Error ('Could not find ingredient.');
        console.log ("No ingredient found")
        error.statusCode = 404;
        throw error;
    }
    return Ingredient.findByIdAndRemove(req.params.ingredientId);
    })
    .then(result => {
      console.log(result);
      res.status(200).json({message: 'Deleted ingredient. '});
    })
    .catch(err => {
      if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  });
}
