const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Using ENV
require('dotenv').config()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Session Express
app.use(session({
  key: 'user_sid',
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires: 1 * 24 * 60 * 60 * 1000
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

// Use router
app.use('/', require('./routes/index'));
// App of adminstration
app.use('/admin/login', require('./routes/admin/get.login'));
app.use('/admin/dashboard', require('./routes/auth').IsLoggedIn, require('./routes/admin/get.dashboard'));
app.use('/adminstration', require('./routes/admin/post.login'));
app.use('/logout', require('./routes/admin/destroy.dashboard'));
// App of users
app.use('/users/register', require('./routes/users/get.register'));
app.use('/signup', require('./routes/users/post.register'));
app.use('/users/login', require('./routes/users/get.login'));
app.use('/loginUsers', require('./routes/users/post.login'));
app.use('/users/dashboard', require('./routes/users/get.dashboard'));
app.use('/users/profile', require('./routes/users/get.profile'));
app.use('/signout', require('./routes/users/destroy.dashboard'));
// App of products
app.use('/productsPost', require('./routes/products/post.products'));
app.use('/productsAll', require('./routes/products/get.products'));
app.use('/removeProducts', require('./routes/products/remove.products'));
// App of list the auction
app.use('/bidders', require('./routes/auctions/get.auctions'));
app.use('/auctions', require('./routes/auctions/post.auctions'));
// App of middleware details router
app.use('/about', require('./routes/about'));
app.use('/blog', require('./routes/blog'));
app.use('/contact', require('./routes/contact'));

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

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log("The server wrong is somewhere")
})

module.exports = app;
