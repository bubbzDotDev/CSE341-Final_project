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
 *          -author
 *      properties:
 *        title: 
 *          type: string
 *          description: The Recipe Title
 *        author:
 *          type: string
 *          description: The Recipe Author
 *      example:
 *        title: Chocolate Chip Cookies
 *        author: Grandma Patsy
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
 *     responses:
 *       200:
 *          description: The recipe description by id 
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Recipe'
 *       500:
 *          description: Server Error
 */
router.post("/", (req, res) => {
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