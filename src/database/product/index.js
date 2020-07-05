const productModel = require('./model');
const { makeProduct } = require('../../product/index')
const makeSaveProduct = require('./saveProduct');

const saveProduct = makeSaveProduct(productModel, makeProduct);

module.exports = {
    saveProduct
}