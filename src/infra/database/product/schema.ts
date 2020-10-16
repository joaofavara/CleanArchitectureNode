import * as mongoose from 'mongoose';

const Product = new mongoose.Schema({
    type: String,
    name: String,
    cost: Number,
    quantity: Number,
    description: String,
});

export default Product;