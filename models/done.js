const mongoose = require('mongoose')
const doneSchema=new mongoose.Schema({
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
      
    },
    r_rent: {
        type: Number,
      
    },
    date: {
        type: Date,
        
    }
})  
module.exports= mongoose.model('Done',doneSchema)