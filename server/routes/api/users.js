var express = require('express');
var router = express.Router();
var auth  = require('../../utilities/auth');
var userModel = require('../../models/userModel');

router.use((req,res,next)=>{
  res.set({
    'Access-Control-Allow-Origin': '*', // allow request from all origins
    'Access-Control-Allow-Methods': '*', // allow all request methods, ex:GET, POST, PUT, DELETE, OPTIONS
    'Access-Control-Allow-Headers': 'content-type' // allow request headers: content-type

  });
  next();
})

router.post('/login',(req,res,next)=>{
  let email = req.body.email;
  let password = req.body.password;
  if (auth.authorize(email,password)){
    req.session.user = email;
    res.json(true);
  }
  else{
    res.json(false);
  }
})

router.post('/logout',(req,res,next)=>{
  req.session.user = undefined;
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
    req.session.user=user.name
    res.status(200).json(user);
  })
})

module.exports = router;
