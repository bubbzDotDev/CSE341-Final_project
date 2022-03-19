//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE

/**
 * @swagger
 * components:
 *  schemas:
 *    Ingredient:
 *      type: object
 *      required:
 *        -qty
 *        -measurement
 *        -item
 *        -notes
 *      properties:
 *          qty:
 *              type: number
 *              desc: Quantity of measurement number
 *          measurement:
 *              type: string
 *              desc: method of measurement 
 *          item:
 *              type: string
 *              desc: ingredient item
 *          notes:
 *              type: string
 *              desc: notes about ingredient
 *          example:
 *              qty: 2
 *              measurement: cups
 *              item: flour
 *              notes: sifted
 */

//sets up header on Swagger UI
/**
 * @swagger
 * tags:
 *    name: Ingredients
 *    description: Add ingredients
 */


//GET all users
/**
 * @swagger
 * /ingredient:
 *   get:
 *     summary: Get all Ingredients
 *     tags: [Ingredients]
 *     responses:
 *        200:
 *            description: Success message 
 *            contents:
 *              application / json:
 *                schema:
 *                  $ref: '#/components/schemas/Recipe' 
 *        500:
 *            description: Server Error
 */



//POST create new user
/**
 * @swagger
 * /add-ingredient:
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredients]
 *     requestBody:
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Ingredient'
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
 *                $ref: '#/components/schemas/Ingredient'
 *       500:
 *          description: Server Error
 */

//GET user by ID
/**
 * @swagger
 * /ingredient/{id}:
 *   get:
 *     summary: 
 *     tags: [Ingredients]
 */

//PUT recipe by id
/**
 * @swagger
 * /ingredients:
 *    put:
 *      summary: 
 *      tags: [Ingredients]
 */


//DELETE recipe by id
/**
 * @swagger
 * /ingredients:
 *    delete:
 *      summary: 
 *      tags: [Ingredients]
 */