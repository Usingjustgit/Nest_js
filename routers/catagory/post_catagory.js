const express = require("express");
const catagory = require("../../database/schema/catagory_table");
const post_catagory = express.Router();


// ==========================================================
//  This router is add the catagory values.
// ==========================================================
post_catagory.post("/catagory/add",async (req,res) => {

    const {name, color, icon, image} = req.body;

    if(!name || !color || !icon || !image){
        res.status(409).json({message : "Some fieds is empty..."});
    }

    try{

        const create_catagory = new catagory({name,color,icon,image});

        const isCatagorySave = await create_catagory.save();

        if(!isCatagorySave){
            throw new Exception();
        }

        res.status(200).json({massage : "Your catagory is added successfully ..."});

    }catch(err){
        res.status(500).json({message : "Internal Server Error."+err});
    }

    await res.status(200).json({message : catagory.find()});
});


// ==========================================================
//  This router is update catagory by id the catagorys
// ==========================================================
post_catagory.put("/catagory/:id",async (req,res) => {

    const {name, color, icon, image} = req.body;
    
    await res.status(200).json({message : await catagory.findByIdAndUpdate(req.params.id,{name,color,icon,image}).exec()});

});


module.exports = post_catagory;