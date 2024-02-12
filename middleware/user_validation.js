const Client_Table = require("../database/schema/client_table");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config({path : "../config.env"});

const isUserValid = async (req, res, next) => {

    try{
        console.log(req.cookies);
        const current_client_token = req.cookies.Access_Given;
        console.log(current_client_token);
        const token = await jwt.verify(current_client_token,process.env.SECRET_KEY);

        const current_client = await Client_Table.findOne({_id:token._id});

        if(!current_client){
            res.status(400).json({message : "Your not valid please, first login..."});
        }

        req.client = current_client;
        req.token = current_client.token;
        req.client_name = current_client.name;
        next();
    }catch(error){
        console.log("Internal server error...",error);
    }
}

module.exports = isUserValid;