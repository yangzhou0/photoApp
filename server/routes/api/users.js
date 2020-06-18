const passport = require('passport');
var express = require('express');
var router = express.Router();
var auth  = require('../../utilities/auth');
var userModel = require('../../models/userModel');
var userController = require('../../controller/userController');
var UserService = userController.UserService

router.use((req, res, next)=>{
  res.set({
  // allow any domain, allow REST methods we've implemented
    'Access-Control-Allow-Origin': req.get('Origin') || '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    "Access-Control-Allow-Headers": "Content-Type",
  // Set content-type for all api requests
    'Content-type':'application/json'
  });
  if (req.method == 'OPTIONS'){
    return res.status(200).end();
  }
  next();
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json(info); }
    req.login(user, function(err) {
      if (err) { return next(err); }
      return res.json(user);
    });
  })(req, res, next);
});

router.get('/logout',(req,res,next)=>{
  req.logout();
  res.json('logged out.')
})

router.post('/register',(req,res,next)=>{
  let email = req.body.email
  let name = req.body.name
  let password = req.body.password
  let nickname = req.body.nickname
  UserService.findByEmail(email).then(foundUser=>{
    // if found user, send res with message
    if (foundUser instanceof Object ){
      return res.json('Email already registered')
    }
    //if no user found, foundUser is returned as null, which means email hasnt been used.
    // so its okay to register with the email
    let user = new userModel(
      {
        email:email,
        name:name,
        nickname:nickname
      }
    )
    //hash the password
    user.setPassword(password)
    user.save().then((user)=>{
      req.login(user, function(err) {
        if (err) { return next(err); }
        return res.status(200).json(user);
      });
    })
  })
})

router.put('/:userID',(req,res,next)=>{
  let updateProfileData = req.body;
  let id = req.params.userID;
  UserService.updateProfile(id,updateProfileData).then((user)=>{
      res.status(200).json(user)
  })


})


module.exports = router;
