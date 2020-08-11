var userModel = require('../models/userModel');

class UserService{

  static findByEmail(email){
    return userModel.findOne({email:email})
  }

  static findById(id){
    return userModel.findById(id);
  }

  static updateProfile(id,data){
    return userModel.findOneAndUpdate({_id:id},data,{new: true})
  }

  static findByNickname(nickname){
    return userModel.findOne({nickname:nickname})
  }

}

module.exports.UserService = UserService;
