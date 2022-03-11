const express = require('express');
const router = express.Router();

//Ashley gets an failure with depracated warning because this says /check
// const { body } = require('express-validator/check');
const {
    body
} = require("express-validator");

const recipeController = require('../controllers/recipe');


//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE


/**
 * @swagger
 * components:
 *  schemas:
 *    Recipe:
 *      type: object
 *      required:
 *          -title
 *          -category
 *          -serving
 *          -cook_time
 *          -directions
 *          -creator
 *      properties:
 *          title:
 *              type: string
 *              desc: The Recipe Title
 *          category:
 *              type: Schema.Types.ObjectId
 *              desc: What type of dish?
 *          serving:
 *              type: number
 *              desc: How many the recipe serves
 *          cook_time:
 *              type: number
 *              desc: Total time prep & cook
 *          ingredient_list:
 *              type: Schema.Types.ObjectId
 *              desc: a list of ingredients
 *              individual_ingredient:
 *                  qty: number
 *                  measurement: string
 *                  ingredient_item: string
 *                  notes: string
 *          directions:
 *              type: string
 *          rating:
 *              type: number
 *          creator:
 *              type: string
 *              description: The Recipe Author
 *          example:
 *              title: Chocolate Chip Cookies
 *              category: dessert
 *              serving: 24
 *              cook_time: 1 hour
 *              ingredient_list: flour, egg, butter, baking soda, vanilla, brown sugar, chocolate chips
 *              directions: Mix all ingredients together until well blended, drop by tablespoonfuls, bake @350 for 10-12 minutes
 *              rating: 5
 *              creator: Grandma Patsy
 * 
 */

//sets up header on Swagger UI
/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: Recipe Managing API
 */


//GET all recipes
/**
 * @swagger
 * /recipes:
 *   get:
 *      summary: Get all recipes
 *      tags: [Recipes]
 */



//GET recipe by ID
/**
 * @swagger
 * /recipes/{id}:
 *   get:
 *    summary: Get a recipe by id
 *    tags: [Recipes]
 */



//POST create new recipe
/**
 * @swagger
 * /recipe:
 *   post:
 *     summary: Create a new recipe
 *     tags: [Recipes]
 *     requestBody:
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Recipe'
 *                properties:
 *                      callbackUrl: mongodb+srv://grandmaAdmin:OpbSOoma8wBDNTn1@cluster0.2be6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 *                      type: string
 *                      format: uri
 *                      example: https://myserver.com/send/callback/here
 *                required:
 *                  -callbackUrl
 *     responses:
 *       200:
 *          description: Success message 
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Recipe'
 *       500:
 *          description: Server Error
 */
router.post("/", (req, res, next) => {
    try {
        const recipe = {
            ...req.body
        };
        req.app.db.get("recipes").push(recipe).write();
        res.send(recipe)
    } catch (error) {
        return res.status(500).send(error);
    }
})


// PUT request to allow editing on a recipe.
// router.put(
//     'admin/recipe/:recipeId', recipeController.updateRecipe
// );

/**
 * @swagger
 * /recipes:
 *    put:
 *      tags: [Recipes]
 */



//DELETE recipe by id
/**
 * @swagger
 * /recipes:
 *    delete:
 *      tags: [Recipes]
 */


module.exports = router;