const express = require("express");
const products = require("../../database/schema/product_table");
const catagorys = require("../../database/schema/catagory_table");
const post_product = express.Router();


post_product.post("/product/add",async (req,res) => {

    const catagory = await catagorys.findById(req.body.catagory).exec();
    if(!catagory){ return res.status(404).json({message : "Catagory is not found."})};


    const {name, descryption, richdescryption, image, brand, price, countInStock, rating, numReview, isFeatured} = req.body;

    if(!name || !descryption || !richdescryption || !image || !brand || !price || !catagory || !countInStock || !rating || !numReview || !isFeatured){
        res.status(409).json({message : "Some fieds is empty..."});
    }

    try{

        const create_products = new products({name, descryption, richdescryption, image, brand, price, catagory, countInStock, rating, numReview, isFeatured});

        const isproductsSave = await create_products.save();

        if(!isproductsSave){
            throw new Exception();
        }

        res.status(200).json({massage : "Your products is added successfully ..."});

    }catch(err){
        res.status(500).json({message : "Internal Server Error."+err});
    }
});


// ==========================================================
//  This router is update products by id the productss
// ==========================================================
post_product.put("/product/:id",async (req,res) => {

    if(!mongoose.isValidObjectId(req.params.id)){ return res.status(404).json({message : "This Object id is invalid."})}

    const catagory = await catagorys.findById(req.body.catagory).exec();
    if(!catagory){ return res.status(404).json({message : "Catagory is not found."})};

    const {name, descryption, richdescryption, image, brand, price, countInStock, rating, numReview, isFeatured} = req.body;
    
    await res.status(200).json({message : await products.findByIdAndUpdate(req.params.id,{name, descryption, richdescryption, image, brand, price, catagory, countInStock, rating, numReview, isFeatured}).exec()});

});


module.exports = post_product;