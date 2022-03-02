//db admin uname: grandmaAdmin
//db admin password: OpbSOoma8wBDNTn1
const express = require('express');
const bodyParser = require('body-parser');

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

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(PORT);
    console.log("connection successfull");
  })
  .catch(err => {
    console.log(err);
  });