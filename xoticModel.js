const mongoose = require('mongoose')

const xoticSchema = new mongoose.Schema({
    brandname:{
        type: String,
        required: false
    },
    industry:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: false
    },
    website:{
        type: String,
    },
    image: {
        data: Buffer,
        contentType: String
    }
})


const xotic = mongoose.model('xotic' , xoticSchema) 

module.exports = xotic;
