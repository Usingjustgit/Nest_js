const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({path:'../config.env'});

const database_connetion = mongoose.connect("mongodb+srv://veryfollow900:v5uvT2rvuPD2EOoE@cluster0.wlbvind.mongodb.net/APIs_Informations?retryWrites=true&w=majority")
    .then(console.log("connection successfull..."))
    .catch((e) => {console.log("Connection is not doing ...",e)});

module.exports = database_connetion;