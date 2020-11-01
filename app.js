const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Session Express
app.use(session({
  secret: 'gradutes-finished',
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires: 600000
  }
}));

// Body-parser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded borderImageSource = 'inherit'


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/admin/login', require('./routes/admin/get.login'));
app.use('/admin/dashboard', require('./routes/auth').adminIsLoggedIn, require('./routes/admin/get.dashboard'));
app.use('/adminstration', require('./routes/admin/post.login'));
app.use('/logout', require('./routes/admin/destroy.dashboard'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
