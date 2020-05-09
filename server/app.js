//node modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
require('dotenv').config();

//customer modules
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var imgRouter = require('./routes/img');
var apiphotos = require('./routes/api/photos');
var apiusers = require('./routes/api/users');

var app = express();
//connect to MongoDB Atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@harvard-cscie31-po5kp.mongodb.net/asg7?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true,  useFindAndModify: false  })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('cscie31-secret'));
app.use(session({
secret:"cscie31",
resave: "true",
saveUninitialized: "true"
}));

//routes
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/home', indexRouter);
app.use('/users', usersRouter);
app.use('/img',imgRouter);
app.use('/api/photos', apiphotos);
app.use('/api/users', apiusers);
app.use('/', express.static('../client/photoApp/dist'));


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
