var auth = {
  users:
    {
      "admin123": "password"
    },
  authorize: function (username, password) {
    if (this.users[username] === password){return true;}//if user-entered data matches with database
    else{return false;}
  },
  required: function(req,res,next){ //this function is used as a middleware if authentication is reuqired in the application
    if(req.session.user){
      return next();
    }else{
      res.redirect('/users/login');
    }
  }
}

module.exports = auth;
