//modules
var express = require('express');
var router = express.Router();
var photoController = require('../../controller/photoController');
var PhotoService = photoController.PhotoService; //PhotoService class to make my code DRY
var multer  = require('multer');
var upload = multer({storage: photoController.storage, fileFilter:photoController.filter }) // customize storage and filter option for multer


router.use((req,res,next)=>{
  res.set({
    'Access-Control-Allow-Origin': '*', // allow request from all origins
    'Access-Control-Allow-Methods': '*', // allow all request methods, ex:GET, POST, PUT, DELETE, OPTIONS
    'access-control-allow-headers': 'content-type' // allow request headers: content-type
  });
  next();
})

// list all photos
router.get('/', (req, res, next)=>{
   PhotoService.list()
    .then((photos) => {
      console.log('type before json.stringfy: ' + typeof photos); //object:array
      console.log('length of returned from PhotoService ' +  photos.length); //array.length
      // console.log('type after json.stringfy: ' + typeof JSON.stringify(photos)); //string
      res.status(200).json(photos); // All response MIMEtype is set to JSON
    });
});

// read one particular photos
router.get('/:photoid', (req, res, next)=>{
  console.log('session: ' + req.session.user)
  PhotoService.read(req.params.photoid)
    .then((photo) => {
     res.status(200).json(photo);
   }).catch((err)=>{
     res.status(404).json('Not Found!');
   });
});

//create a new photo
router.post('/',upload.single('photo'),async (req,res,next)=>{
  try{
    let imageUrl = 'static/uploaded-images/' + req.file.filename;
    let photoSchema = {
      description:req.body.description,
      imageUrl:imageUrl,
      originalName:req.file.originalname,
      hashtag: req.body.hashtag
    };
    let photo = await PhotoService.create(photoSchema);
    res.status(201).json(photo);
  }catch{
    throw new Error("Upload Error");
  }
})

//update an existing photo
router.put('/:photoID',(req,res,next)=>{

  console.log('req.url: ' + req.url);//string
  console.log('typeof req.url: ' + typeof req.url);//string
  console.log('req: ' + req);//object
  console.log('typeof req: ' + typeof req);//obj
  console.log('type of req.body: ' + typeof req.body);//obj
  console.log('req.body: ' + req.body);
  console.log('req.body.description: ' + req.body.description); //ironman
  console.log('typeof req.body.description: ' + typeof req.body.description);//string
  let updateData = req.body; // req.body is already parsed to object by this point by express.json();
  let id = req.params.photoID;
  PhotoService.update(id,updateData).then((updatedPhoto)=>{
    res.status(200).json(updatedPhoto);
  })
    .catch(err=>{
      throw new Error ('Update Error');
    });
})

//delete an existing photo
router.delete('/:photoID',(req,res,next)=>{
    let id = req.params.photoID;
    PhotoService.delete(id).then(deletedPhoto=>{
      res.status(200).json(deletedPhoto);
    }).catch((err)=> {
     res.status(404).end()
   })
})

//delete all photos
router.delete('/',(req,res,next)=>{
  PhotoService.deleteAll().then((deletedPhotos)=>{
    res.status(200).json(deletedPhotos);
  })
})

//error handling
router.use(function(err, req, res, next){
  if(err){
    res.status(500).json(err.message);
  }
});

module.exports = router;
