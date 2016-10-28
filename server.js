require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const parser = require('body-parser');
const homeRoute = require('./routes/index');
const bookRoute = require('./routes/show')

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(parser.urlencoded({ extended: true}));


app.use(logger('dev'));
app.use('/', homeRoute);
app.use('/', bookRoute)
app.use(express.static('public'));



app.listen(port, () => console.log('server is listening on port debika', 3000));
