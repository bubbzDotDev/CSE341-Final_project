require('dotenv').config();
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const MongoDB = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();

// Swagger API requires
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

//routes
const recipeRoutes = require('./routes/recipe');
const userRoutes = require('./routes/user');
const ingredientRoutes = require('./routes/ingredient');

const MONGODB_URI = process.env.MONGODB_URI;

//updated from sessions to a list of recipes
const db = new MongoDB({
  uri: MONGODB_URI,
  recipes: [],
  users: []
});

//Swagger set up
const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Recipe API",
      version: "1.0.0",
      description: "A simple Express Recipe API"
    },
    servers: [{
      url: process.env.HOST_URL
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'Authorization',
        }
      }
    },
    security: [{
      bearerAuth: []
    }],
  },
  apis: ["./swagger/*.js"]
}
// This tells Swagger-jsdoc where/how to parse the comments
const specs = swaggerJsdoc(options);
//specify specs to build UI & view api docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


// This allows us to make requests through the api.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//access in routes
app.db = db;

//parse json body of the request
app.use(express.json())
app.use(bodyParser.json());

// Using our routes as defined.
app.use('/recipes', recipeRoutes);
app.use('/user', userRoutes);
app.use('/ingredients', ingredientRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// CORS
const corsOptions = {
  origin: process.env.HOST_URL,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(PORT);
    console.log("connection successful");
  })
  .catch(err => {
    console.log(err);
  });