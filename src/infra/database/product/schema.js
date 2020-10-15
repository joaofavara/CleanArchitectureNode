const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    type: String,
    name: String,
    cost: Number,
    quantity: Number,
    description: String,
});

module.exports = Product;