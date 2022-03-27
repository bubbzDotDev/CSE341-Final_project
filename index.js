require('dotenv').config();
//db admin uname: grandmaAdmin
//db admin password: OpbSOoma8wBDNTn1
const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const MongoDB = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();
const csrf = require('csurf');

// Swagger API requires
const swaggerUI = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")


//routes
const recipeRoutes = require('./routes/recipe');
const userRoutes = require('./routes/user');
const ingredientRoutes = require('./routes/ingredient');

const MONGODB_URI = 'mongodb+srv://grandmaAdmin:OpbSOoma8wBDNTn1@cluster0.2be6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


//updated from sessions to a list of recipes
const db = new MongoDB({
  uri: MONGODB_URI,
  recipes: [],
  users: []
});

const csrfProtection = csrf();

//Swagger set up
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Recipe API",
      version: "1.0.0",
      description: "A simple Express Recipe API"
    },
    servers: [{
      url: "http://localhost:3000"
    }]
  },
  apis: ["./swagger/*.js"]
}
// This tells Swagger-jsdoc where/how to parse the comments
const specs = swaggerJsdoc(options)
//specify specs to build UI & view api docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))


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
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(csrfProtection);

// Using our routes as defined.
app.use(recipeRoutes);
app.use(userRoutes);
app.use(ingredientRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(PORT);
    console.log("connection successful");
  })
  .catch(err => {
    console.log(err);
  });