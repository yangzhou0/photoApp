//require mongoose
let mongoose = require('mongoose');
const crypto = require('crypto');

//set up properties for userSchema
let userSchema = new mongoose.Schema(
  {
    hash: {type: String, required:true},
    salt: {type: String, required:true},
    email: {type: String, required:true},
    createdAt: {type: Date},
    updatedAt: {type: Date}
  }
);

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

userSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

//set up prehook for userScheme, before saving a new photo to DB, also check if it has a createdAt or updatedAt property
userSchema.pre('save',function(next){
  if(!this.createdAt){
    this.createdAt = new Date();
    return next();
  }else{
    this.updatedAt = new Date();
    return next();
  }

});




let userModel = mongoose.model('User',photoSchema);
module.exports = userModel;
