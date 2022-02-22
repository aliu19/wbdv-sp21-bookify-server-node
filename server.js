var express = require('express')
var app = express()

var session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aliu19:mongo-password@cluster0.p3si5.mongodb.net/vibeify?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


/// configures CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://aliu19.github.io/wbdv-sp21-bookify');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./controllers/book-list-controller")(app)
require("./controllers/user-controller")(app)
require("./controllers/review-controller")(app)

require('dotenv').config();
app.listen(process.env.PORT || 4000)
