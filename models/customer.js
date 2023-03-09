const mongoose = require('mongoose')
const customerSchema=new mongoose.Schema({
    slip: {
        type: Number,
    },
    name: {
        type: String,
        
    },
    number: {
        type: Number,
        
    },
    address: {
        type: String
    },
    sitting: {
        type: String
    },
    fuction: {
        type: String
    },
    area: {
        type: String
    },
    t: {
        type: String,
        
    },
    t_rent: {
        type: Number,
        
    },
    a_rent: {
        type: Number,
        required: true
    },
    r_rent: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        
    },
    stage: {
        type: String,
        
    }
})  
module.exports= mongoose.model('Customer',customerSchema)