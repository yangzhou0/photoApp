//node modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
const passport = require('passport');

require('./controller/passport')
require('dotenv').config();
//customer modules
var apiphotos = require('./routes/api/photos');
var apiusers = require('./routes/api/users');

var app = express();
//connect to MongoDB Atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@harvard-cscie31-po5kp.mongodb.net/test?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true,  useFindAndModify: false  })

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
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/static', express.static(path.join(__dirname, 'public'))); //serve static files. In my project, those would be pictures
app.use('/api/photos', apiphotos); //handle photos api calls: CRUD actions
app.use('/api/users', apiusers); //handle user api calls for login authentication
app.use('/', express.static('../client/dist/photoApp')); // Link angular front-end to server
app.use('*', express.static('../client/dist/photoApp')); // if a user refresh a page or enter something unrecognized, redirect to index.html


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
  res.status(err.status || 500).json(err.message);
});

module.exports = app;
