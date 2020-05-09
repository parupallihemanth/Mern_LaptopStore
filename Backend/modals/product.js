const mongoose = require('mongoose');



productSchema = new mongoose.Schema({
    name  : {
        type : String,
        required :  true,
        maxlength : 64,
        unique : true
    },

    description : {
        type : String,
        required : true,
        maxlength : 2000
    },

    price : {
        type : Number,
        required : true
    },

    stock : {
        type : Number,
        
    },

    sold : {
        type: Number,
        
        default : 0
    },

    photo : {
        type : Buffer,
        contentType : String
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Product', productSchema)