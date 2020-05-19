var express = require('express');
var router = express.Router();
var auth  = require('../../utilities/auth');

router.use((req,res,next)=>{
  res.set({
    'Access-Control-Allow-Origin': '*', // allow request from all origins
    'Access-Control-Allow-Methods': '*', // allow all request methods, ex:GET, POST, PUT, DELETE, OPTIONS
    'access-control-allow-headers': 'content-type' // allow request headers: content-type

  });
  next();
})

router.post('/login',(req,res,next)=>{
  let username = req.body.username;
  let password = req.body.password;
  if (auth.authorize(username,password)){
    req.session.user = username;
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

router.post('/register'(req,res,next)=>{
  
})

module.exports = router;
