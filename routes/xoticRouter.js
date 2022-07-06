const express = require ('express')
const xoticController = require ('./../controllers/xoticController')
const multermiddle = require ('./../multer/multermiddle')

const app1 = express.Router();

app1
    .route('/')
    .get(xoticController.printAllbody)
    .post(multermiddle,xoticController.createBody)

// app1
//     .route('/uploads')
//     .post(xoticController.UploadImg)

module.exports = app1;

