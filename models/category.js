const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Category Schema. Used to create a dropdown list when building a recipe.
const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Category', categorySchema);