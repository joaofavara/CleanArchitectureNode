const productModel = require('./model');
const makeSaveProduct = require('./makeSaveProduct');

const saveProduct = makeSaveProduct(productModel);

module.exports = {
    saveProduct
}