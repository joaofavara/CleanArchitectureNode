const mongoose = require('mongoose');
const productSchemas = require('./schema');

const productModel = mongoose.model('Product', productSchemas);

export default productModel;