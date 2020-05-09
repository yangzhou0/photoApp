var express = require('express');
var router = express.Router();
const username = require('username');
var flash = require('connect-flash');
var photoModel = require('../models/photoModel');

router.use(flash());

/* GET home page. */
router.get('/', async function(req, res, next) {
  let mostRecentImage = await photoModel.findOne().sort({ createdAt: -1 });
  res.render('index',{flashMessage:req.flash("uploadError"), mostRecentImage:mostRecentImage, user:req.session.user});
  }
);

module.exports = router;
