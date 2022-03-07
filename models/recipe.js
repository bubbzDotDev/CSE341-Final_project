const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Recipe Schema, references the category model, ingredient model, and user model.
const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        serving: {
            type: Number,
            required: true
        },
        cook_time: {
            type: String,
            required: true
        },
        ingredient_list: {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        },
        directions: {
            type: String,
            required: true
        },
        rating: {
            type: Number
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }
);

module.exports = mongoose.model('Recipe', recipeSchema);