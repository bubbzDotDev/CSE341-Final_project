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


//GET all ingredients
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



//POST create new ingredient
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

//GET ingredient by ID
/**
 * @swagger
 * /ingredient/{ingredientId}:
 *   get:
 *     summary: Get a ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *      - in: path
 *        name: ingredientId
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the ingredient to get
 *        example: 623bca89f29f29269342e2d9 # gary ingredient
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

//PUT ingredient by id
/**
 * @swagger
 * /edit-ingredient/{ingredientId}:
 *    put:
 *     summary: Update an ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *      - in: path
 *        name: ingredientId
 *        schema:
 *          type: string
 *        required: true
 *        description: Numeric ID of the ingredient to update
 *        example: 623bca89f29f29269342e2d9 # gary ingredient
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


//DELETE ingredient by id
/**
 * @swagger
 * /delete-ingredient/{ingredientId}:
 *   delete:
 *     summary: Delete an ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *      - in: path
 *        name: ingredientId
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the ingredient to delete
 *        example: ID_GOES_HERE
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