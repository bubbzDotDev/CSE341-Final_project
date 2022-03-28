//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE/Login

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
 *          email:
 *              type: string
 *              desc: User's email address
 *          username:
 *              type: string
 *              desc: User's username to login
 *          password:
 *              type: string
 *              desc: Password
 *          example:
 *              firstName: Cookie
 *              lastName: Monster
 *              email: blue_fur@sesamestreet.com
 *              username: choc_chip4life
 *              password: monsterchoc
 *              recipes: Monster Chocolate Chip Cookie
 * 
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Login-User:
 *      type: object
 *      required:
 *        -email
 *        -password
 *      properties:
 *          email:
 *              type: string
 *              desc: User's email address
 *          password:
 *              type: string
 *              desc: Password
 *          example:
 *              email: blue_fur@sesamestreet.com
 *              password: monsterchoc
 * 
 */


//sets up header on Swagger UI
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Registered user accounts
 */

//POST create new user
/**
 * @swagger
 * /user/add-user:
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
 * /user/users/{id}:
 *   get:
 *     summary: Get a user by id
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user to get
 *        example: 6230cb4f836d17a048a057c9 (Han Solo)
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

//PUT user by id
/**
 * @swagger
 * /user/edit-user/{userId}:
 *    put:
 *     summary: Update a user by id
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *        description: Numeric ID of the user to update
 *        example: 623bd0b9ba35e5d11659121f # Bobba Fett
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

//DELETE user by id
/**
 * @swagger
 * /user/delete-user/{userId}:
 *    delete:
 *     summary: Delete user by ID
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user to get
 *        example: ID_GOES_HERE
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

//POST login user by email password
/**
 * @swagger
 * /user/login:
 *    post:
 *     summary: Logs in existing user
 *     tags: [Users]
 *     requestBody:
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Login-User'
 *                properties:
 *                      callbackUrl: https://localhost:3000/
 *                      type: string
 *                      format: uri
 *                required:
 *                  -callbackUrl
 *     responses:
 *       200:
 *          description: Success message 
 *          contents:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'      
 *       401:
 *          description: Unable to authenticate 
 *          
 *       500:
 *          description: Server Error
 *    
 */