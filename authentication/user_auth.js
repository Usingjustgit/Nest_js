const express = require("express");
const auth_router = express.Router();
const Client_Table = require("../database/schema/client_table");

const bcrypt = require("bcryptjs");


auth_router.post("/registration", async (req,res) => {

    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(409).json({message : "Your some field is blanck."});
    }

    try{
        const isAvailableClient = await Client_Table.findOne({email});

        if(isAvailableClient){
            return res.status(400).json({message: "User alrady exist..."});
        }

        const create_client = new Client_Table({name,email,password});

        await create_client.save();

        res.status(200).json({message : "Registration Successfull ....."});

    }catch(error){
        console.log("Internal Server Error ...",error);
    }
});

auth_router.post("/sign_up", async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(409).json({message : "Your some field is blanck."});
    }

    try{

        const isAvailableClient = await Client_Table.findOne({email});

        if(!isAvailableClient){
            return res.status(400).json({message: "User not exist..."});
        }

        if(!await bcrypt.compare(password, isAvailableClient.password)){
            return res.status(400).json({message: "User password is incorrect..."});
        }

        const generatedToken = await isAvailableClient.generatedToken();
        await Client_Table.updateOne({_id : isAvailableClient._id}, {$set : {token : generatedToken}});

        res.cookie("Access_Given",generatedToken,{
            expires : new Date(Date.now() + 60*10),
            httpOnly : true,
        })

        await isAvailableClient.save();

        res.status(200).json({message : "Login Successfull ....."});

    }catch(error){
        console.log("Internal Server Error ...",error);
    }
});

module.exports = auth_router;