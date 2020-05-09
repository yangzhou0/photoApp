//import node and custom modules
var multer  = require('multer')
var photoModel = require('../models/photoModel');
//set storage configs for multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploaded-images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})

//set filter configs for multer
var filter = function fileFilter (req, file, cb) {
  if(file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
    cb(null,true);
  }
  else{
    cb(new Error('Not an image'),false);
  }
}


class PhotoService {
  //list
  static list(){
    console.log('type of photos from mongoose call: ' + typeof photoModel.find())//array:object
    return photoModel.find();
  }
  //read
  static read(id){
    return photoModel.findById(id);
  }
  //create
  static create(schema){
    let photo = new photoModel(schema);
    return photo.save();
  }
  //update
  static update(id,updateData){
    return photoModel.findById(id)
    .then(photo=>{
      photo.set(updateData);
      return photo.save();
    });
  }
  //delete
  static delete(id){
    return photoModel.deleteOne({_id: id});
  }
  //deleteAll
  static deleteAll(){
    return photoModel.find().deleteMany();
  }

}

module.exports.storage = storage;
module.exports.filter = filter;
module.exports.PhotoService = PhotoService;
