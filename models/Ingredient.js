const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Ingredient Schema, used to list ingredients in a recipe.
const ingredientSchema = new Schema(
    {
        qty: {
            type: Number,
            required: true
        },
        measurement: {
            type: String,
            required: true
        },
        item: {
            type: String,
            required: true
        },
        notes: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Ingredient', ingredientSchema);