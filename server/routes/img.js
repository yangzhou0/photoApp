//modules
var express = require('express');
var flash = require('connect-flash');
var methodOverride = require('method-override');
var router = express.Router();
router.use(flash());
router.use(methodOverride('_method'));
var multer  = require('multer');
var photoController = require('../controller/photoController');
var PhotoService = photoController.PhotoService;
var upload = multer({storage: photoController.storage, fileFilter:photoController.filter }) // customize storage and filter option for multer
var photoModel = require('../models/photoModel');
var auth = require('../utilities/auth');

// async function to get all the image data saved on mongoDB
router.get('/',async (req,res)=>{
  let images = await PhotoService.list();
    if (images.length === 0){var noImage = true;}
    else {var noImage = false;}
    res.render('images',{images:images, noImage: noImage});
});

//when imageID is given in the url, retrieve one single image from DB
router.get('/:imageID',auth.required,(req,res)=>{
  let id = req.params.imageID;
  PhotoService.read(id)
    .then((image)=>{
      res.render('editImage',{image:image})
    });
})

//Editing single image using POST with a given imageID, redirect to the updated image page
router.post('/:imageID',(req,res)=>{
  let id = req.params.imageID;
  let updateData = req.body;
  PhotoService.update(id,updateData)
  .then(()=>{
    res.redirect('/img')
  });
})

//Delete particular one image with given imageID
router.delete('/:imageID',auth.required,(req,res)=>{
  let id = req.params.imageID;
  PhotoService.delete(id)
  .then(()=>{
    res.redirect('/img')
  });
})

//Delete all uploaded images from DB when DELETE to '/'
router.delete('/',auth.required,(req,res)=>{
  PhotoService.deleteAll()
  .then(()=>{
    res.redirect('/img')
  });
})

//Create a new image record on DB when POST to '/'
router.post('/',upload.single('image'),(req,res)=>{
  let imageUrl = 'static/uploaded-images/' + req.file.filename;
  let photoSchema = {
    description:req.body.description,
    imageUrl:imageUrl,
    originalName:req.file.originalname,
    hashtag: req.body.hashtag
  };
  PhotoService.create(photoSchema)
    .then(()=>{
    res.redirect('/');
  }).catch((err)=>{
    throw new Error ('Upload Image Error');
  })
});

//when none of the above urls are met, or an error occured somewhere from the above routes.
router.use(function(err,req,res,next){
  if(err.message == 'Not an image'){
    req.flash("uploadError", "Only upload image files, ex: jpg|jpeg|png|gif");
    res.redirect('/');
  }
  else if (err.message == 'Upload Image Error'){
    req.flash("uploadError", "Failed to save");
    res.redirect('/');
  }
  else{
    next(err);
  }
})

module.exports = router;
