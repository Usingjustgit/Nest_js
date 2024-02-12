const mongoose = require('mongoose');

const catagorySchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    color : {
        type : String,
        require : true,
    },

    icon : {
        type : String,
        default : '',
    },

    image : {
        type : String,
        default : '',
    },

});

const catagory = mongoose.model("catagory",catagorySchema);

module.exports = catagory;