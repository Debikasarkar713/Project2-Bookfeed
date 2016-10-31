require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bcrypt = require('bcryptjs');
const parser = require('body-parser');
const homeRoute = require('./routes/index');
const bookRoute = require('./routes/show');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const router = require('./routes/index.js');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const showRouter = require('./routes/show');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'DebikaSarkar',
}));

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/show', showRouter);
app.use('/users/login', homeRoute);


app.use('/', homeRoute);
app.use('/', bookRoute);
app.use('/feed', showRouter);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => console.log('server is listening on port debika', 3000));
