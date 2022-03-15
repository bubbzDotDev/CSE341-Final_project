//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        -firstName
 *        -lastName
 *        -email
 *        -username
 *        -password
 *      properties:
 *          firstName:
 *              type: string
 *              desc: User's First Name
 *          lastName:
 *              type: string
 *              desc: User's Last Name
 *          username:
 *              type: string
 *              desc: User's username to login
 *          password:
 *              type: string
 *              desc: Password
 *          recipes:
 *              type: Schema.Types.ObjectId
 *              desc: a list of recipes
 *          example:
 *              firstName: Chocolate Chip Cookies
 *              lastName: dessert
 *              email: 24
 *              username: 1 hour
 *              password: 
 *              recipes: 
 * 
 */

//sets up header on Swagger UI
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Registered user accounts
 */


//GET all users
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all Users
 *     tags: [Users]
 */



//POST create new recipe
/**
 * @swagger
 * /add-user:
 *   post:
 *     summary: Create a new user account
 *     tags: [Users]
 *     requestBody:
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
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
 *                $ref: '#/components/schemas/User'
 *       500:
 *          description: Server Error
 */

//GET user by ID
/**
 * @swagger
 * /uses/{id}:
 *   get:
 *     summary: Get User by id
 *     tags: [Users]
 */

//PUT recipe by id
/**
 * @swagger
 * /users:
 *    put:
 *      summary: Update User information
 *      tags: [Users]
 */


//DELETE recipe by id
/**
 * @swagger
 * /users:
 *    delete:
 *      summary: Delete a User
 *      tags: [User]
 */