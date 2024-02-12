const mongoose = require("mongoose");

// ===================================================================
//  It is use to pick a secret key form the secret file..
// ===================================================================
require("dotenv/config");


// ===================================================================
//  This is require for the incrypt password to inredable form.
// ===================================================================
const bcrypt = require("bcryptjs");


// ===================================================================
//  This is a require for the veryfy and given unique id to the user.
// ===================================================================
const jwt = require("jsonwebtoken");



const userSchema = mongoose.Schema({

    name : {
        type : String,
        require : true
    },

    email : {
        type : email,
        require : true,
    },

    password : {
        type : String,
        require : true,
    },

    street : {
        type : String,
    },
    
    apartment : {
        type : String,
    },

    city : {
        type : String,
    },

    zip : {
        type : String,
    },

    contry : {
        type : String,
    },

    mobile : {
        type : Number,
        require : true,
    },

    isAdmin : {
        type : Boolean,
        require : true,
        default : false
    },

    token : {
        type : String
    }
});

// ===================================================================
//  This is used to user registe time encrypt the password.
// ===================================================================
userSchema.pre('save',async function(next){
    if(!isModified('password')){
        this.password = await bcrypt.hash(this.password, 11);
    }
    next();
});

// ===================================================================
//  This function is used to generate the token.
// ===================================================================
userSchema.methods.generateToken = async function(){
    return jwt.sign({_id:this._id}, process.env.SECRET_KEY);
}


const User = mongoose.model("user", userSchema);

module.exports = User;