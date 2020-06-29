const database = require('../database/product/index');

// const getAllProducts = require('./getAllProducts');
// const getOneProduct = require('./getOneProduct');
const makeSaveProduct = require('./saveProduct');
// const updateProduct = require('./updateProduct');
// const deleteProduct = require('./deleteProduct');

const saveProduct = makeSaveProduct(database.saveProduct);

module.exports = {
    // getAllProducts,
    //getOneProduct,
    saveProduct,
    // updateProduct,
    // deleteProduct,
}