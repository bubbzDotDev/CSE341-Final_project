//db admin uname: grandmaAdmin
//db admin password: OpbSOoma8wBDNTn1
const express = require('express');
const bodyParser = require('body-parser');

const recipeRoutes = require('./routes/recipe');
const userRoutes = require('./routes/user');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();
const MONGODB_URI = 'mongodb+srv://grandmaAdmin:OpbSOoma8wBDNTn1@cluster0.2be6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

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

// Using our routes as defined.
app.use('/recipe', recipeRoutes);
app.use('/user', userRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(PORT);
    console.log("connection successful");
  })
  .catch(err => {
    console.log(err);
  });