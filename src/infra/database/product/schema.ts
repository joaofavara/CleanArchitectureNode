import { Schema } from 'mongoose';

const Product = new Schema({
    type: String,
    name: String,
    cost: Number,
    quantity: Number,
    description: String,
});

export default Product;