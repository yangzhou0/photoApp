var auth = {
  required: function(req,res,next){ //this function is used as a middleware if authentication is reuqired in the application
    if(req.user){
      return next();
    }else{
      return res.sendStatus(401);
    }
  }
}

module.exports = auth;
