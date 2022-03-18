//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE

/**
 * @swagger
 * components:
 *  schemas:
 *    Recipe:
 *      type: object
 *      required:
 *          -title
 *          -serving
 *          -cook_time
 *          -directions
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
 *     summary: Get all recipes
 *     tags: [Recipes]
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



//POST create new recipe
/**
 * @swagger
 * /add-recipe:
 *   post:
 *     summary: Create a new recipe
 *     tags: [Recipes]
 *     requestBody:
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Recipe'
 *                properties:
 *                      callbackUrl: https://localhost:3000/
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

//GET recipe by ID
/**
 * @swagger
 * /recipes/{id}:
 *   get:
 *     summary: Get a recipe by id
 *     tags: [Recipes]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Numeric ID of the recipe to get
 *        example: 622c03ea692c38732a8ec5f5 # Chocolate Moose
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

//PUT recipe by id
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