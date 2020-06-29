const productModel = require('../../product/product.model');
const makeSaveProduct = require('./saveProduct');

const saveProduct = makeSaveProduct(productModel);

module.exports = {
    saveProduct
}