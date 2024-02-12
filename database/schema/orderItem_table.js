const mongoose = require('mongoose');

const orderItemsSchema = mongoose.Schema({

});

const orderItems = mongoose.model("catagory",orderItemsSchema);

module.exports = orderItems;