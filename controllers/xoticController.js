const xotic = require('./../xoticModel')
const multer = require('multer')
const app = require('../app')
const fs = require('fs')

exports.printAllbody = async (req, res) => {
    try {
        const content = await xotic.find()

        res.status(200).json({
            status: 'Successful',
            results: content.length,
            data: {
                content
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}



exports.createBody = async (req, res) => {
    try {
                const newcontent = await xotic.create({
                    ...req.body,
                    image : {
                        data : fs.readFileSync(req.file.path),
                        contentType: 'image/png'
                    }
                })
                res.status(201).json({
                    status: 'Successfully Added in Database',
                    data: {
                        xotic: newcontent
                    }
                }) 

    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err
        })
    }}




exports.UploadImg = async (req, res) => {
    try {

    } catch (err) {
        res.status(404).json({
            status: 'Fail',
            message: err
        })
    }
}