var userModel = require('../models/userModel');

class UserService{

  static findByEmail(email){
    return userModel.findOne({email:email})
  }
}

module.exports.UserService = UserService;
