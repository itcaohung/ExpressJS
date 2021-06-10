const express = require('express')
const morgan = require('morgan')
const path = require('path');
const handlebars = require("express-handlebars");

const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Support for res.body()
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

// HTTP Logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})