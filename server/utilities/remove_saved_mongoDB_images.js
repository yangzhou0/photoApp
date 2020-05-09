var mongoose = require('mongoose');
var photoModel = require('../models/photoModel');
require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@harvard-cscie31-po5kp.mongodb.net/test?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true })

photoModel.find().deleteMany().then(()=>{console.log('deleted all images')})
