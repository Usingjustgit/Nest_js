const express = require("express");
const get_catagory = express.Router();

const catagory = require("../../database/schema/catagory_table");

// ==========================================================
//  This router is return the all the catagorys
// ==========================================================
get_catagory.get("/catagory/",async (req,res) => {
    await res.status(200).json({message : await catagory.find().exec()});
});

// ==========================================================
//  This router is return the single catagory by id
// ==========================================================
get_catagory.get("/catagory/:id",async (req,res) => {
    await res.status(200).json({message : await catagory.findById({_id:req.params.id})});
});

// ==========================================================
//  This router is return the remove catagory by id
// ==========================================================
get_catagory.delete("/catagory/:id",async (req,res) => {
    await res.status(200).json({message : await catagory.deleteOne({_id:req.params.id})});
});



module.exports = get_catagory;