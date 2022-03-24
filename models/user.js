const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Handles the user schema, also allows a list of recipes to link to a user.
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // recipes: [
    //     {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Recipe'
    //     }
    // ]
});

module.exports = mongoose.model('User', userSchema);