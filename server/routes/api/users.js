const passport = require('passport');
var express = require('express');
var router = express.Router();
var auth  = require('../../utilities/auth');
var userModel = require('../../models/userModel');

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
  user = new userModel(
    {
      email:req.body.email,
      name:req.body.name
    }
  )
  user.setPassword(req.body.password)
  user.save().then((user)=>{
    req.login(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).json(user);
    });
  })
})

router.get('/currentUser', (req, res, next)=>{
  console.log('req.user when loading photos: ',req.user)
  const email = req.user.email;
   userModel.findOne({'email': email}, (err, user) => {
      if (err){
        return res.send("Error!");
      }
      res.json( user );
    });
});

module.exports = router;
