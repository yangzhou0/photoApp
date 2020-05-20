var auth = {
  required: function(req,res,next){ //this function is used as a middleware if authentication is reuqired in the application
    if(req.user){
      return next();
    }else{
      res.redirect('/login');
    }
  }
}

module.exports = auth;
