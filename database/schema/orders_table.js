const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

});

const order = mongoose.model("catagory",orderSchema);

module.exports = order;