const mongoose = require("mongoose");
const catagory = require("./catagory_table");

const productSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    descryption : {
        type : String,
        require : true,
    },

    richdescryption : {
        type : String,
        default : '',
    },

    image : {
        type : String,
        default : '',
    },

    images : [{
        type : String
    }],
    
    brand : {
        type : String,
        required : true,
    },

    price : {
        type : Number,
        default : 0,
        min : 0,
    },

    catagory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'catagory',
        required : true
    },

    countInStock : {
        type : Number,
        default : 0,
        min : 0,
        max : 1001
    },

    rating : {
        type : Number,
        default : 0,
        min : 0,
        max : 5,
    },

    numReview : {
        type : Number,
        default : 0,
        min : 0,
        max : 5,
    },

    isFeatured : {
        type : Boolean,
        default : false
    },

    dateCreated : {
        type : Date,
        default : Date.now,
    }

});

const products = mongoose.model("prduct_table",productSchema);

module.exports = products;