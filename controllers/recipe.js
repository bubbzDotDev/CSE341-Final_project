const Recipe = require('../models/recipe')

exports.deleteRecipe = (req, res, next) => {
    //get recipie id, delete recipe,
    const recipeId = req.params.postID;
    Recipe.findById(recipeId)
    .then(recipe => {
        if (!recipe) {
            const error = new Error ('Could not find recipe.');
            error.statusCode = 404;
            throw error;
        }
        //Validate user ?

        return Recipe.findByIdAndRemove(recipeId);

    })
    .then(result => {
        console.log(result);
        res.status(200).json({message: 'Deleted recipe. '});
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
    
};