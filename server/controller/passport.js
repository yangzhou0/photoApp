const passport = require('passport');
const LocalStrategy = require('passport-local')
var User = require('../models/userModel')



passport.use(new LocalStrategy(
  //define varibales for passport to look for in req.body
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, 'Email not registered'); }
      if (!user.validatePassword(password)) { return done(null, false, 'Wrong password'); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.email);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({'email': id}, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});
