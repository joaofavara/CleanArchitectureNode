const mongoose = require('mongoose');
const productSchemas = require('./product.schemas');

const productModel = mongoose.model('Product', productSchemas);

module.exports = productModel;