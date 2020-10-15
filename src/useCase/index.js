const { saveProduct } = require('../infra/database/product');

// const getAllProducts = require('./getAllProducts');
// const getOneProduct = require('./getOneProduct');
const makeSaveProduct = require('./makeSaveProduct');
// const updateProduct = require('./updateProduct');
// const deleteProduct = require('./deleteProduct');

module.exports = {
    // getAllProducts,
    //getOneProduct,
    saveProduct: makeSaveProduct(saveProduct),
    // updateProduct,
    // deleteProduct,
}