//modules
var express = require('express');
var router = express.Router();
var auth  = require('../utilities/auth');

//get login page
router.get('/login',(req,res,next)=>{
  res.render('login',{flashMessage:req.flash("wrongCredentials")}); // when flashMessage is provided from wrong credentials, display it. see line 27
})

//clear session.user when log out
router.get('/logout',(req,res,next)=>{
  req.session.user = undefined;
  res.redirect('/');
})

//when authentication succeeds, redirect to homepage and set session.user = username.
router.post('/login',(req,res,next)=>{
  let username = req.body.username;
  let password = req.body.password;
  if (auth.authorize(username,password)){
    req.session.user = username;
    res.redirect('/');
  }
  else{
    req.flash("wrongCredentials", "No username:password combination found, retry");
    res.redirect('./login');
  }

})

module.exports = router;
