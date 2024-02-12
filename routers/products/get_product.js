const express = require("express");
const products = require("../../database/schema/product_table");
const { default: mongoose } = require("mongoose");
const get_product = express.Router();

// ==========================================================
//  This router is return the all the products
// ==========================================================
get_product.get("/product/",async (req,res) => {
    await res.status(200).json({message : await products.find().populate("catagory").exec()});
});

// ==========================================================
//  This router is return the single product by id
// ==========================================================
get_product.get("/product/:id",async (req,res) => {
    if(!mongoose.isValidObjectId(req.params.id)){ return res.status(404).json({message : "This Object id is invalid."})}
    await res.status(200).json({message : await products.findById({_id:req.params.id}).populate("catagory").exec()});
});

// ==========================================================
//  This router is return the number of count product by id
// ==========================================================
get_product.get("/get/product/count",async (req,res) => {
    await res.status(200).json({message : await products.countDocuments()});
});

// ==========================================================
//  This router is return the all Featued products 
// ==========================================================
get_product.get("/get/product/featured",async (req,res) => {
    await res.status(200).json({message : await products.find({isFeatured : true}).exec()});
});

// ==========================================================
//  This router is return the limited Featued products 
// ==========================================================
get_product.get("/get/product/featured/:count",async (req,res) => {
    const count = req.params.count ? req.params.count : 0;
    await res.status(200).json({message : await products.find({isFeatured : true}).limit(+count)});
});

// ==========================================================
//  This router is return the catagory wish products 
// ==========================================================
get_product.get("/get/product/featured/catagory",async (req,res) => {
    let filter;
    if(req.query.catagory){
        filter = {catagory : req.query.catagory.split(',')}
    }
    await res.status(200).json({message : await products.find(filter).populate('catagory').exec()});
});

// ==========================================================
//  This router is return the remove product by id
// ==========================================================
get_product.delete("/product/:id",async (req,res) => {
    if(!mongoose.isValidObjectId(req.params.id)){ return res.status(404).json({message : "This Object id is invalid."})}
    await res.status(200).json({message : await products.deleteOne({_id:req.params.id}).exec()});
});


module.exports = get_product;