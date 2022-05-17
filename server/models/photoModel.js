//require mongoose
let mongoose = require("mongoose");
//set up properties for photoSchema
let photoSchema = new mongoose.Schema({
  description: String,
  imageUrl: String,
  originalName: String,
  hashtag: String,
  author: String,
  createdAt: Date,
  updatedAt: Date,
  likes: Number,
});
//set up prehook for photoSchema, before saving a new photo to DB, also check if it has a createdAt or updatedAt property
photoSchema.pre("save", function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
    this.likes = 0;
    return next();
  } else {
    this.updatedAt = new Date();
    return next();
  }
});

let photoModel = mongoose.model("Photo", photoSchema);
module.exports = photoModel;
