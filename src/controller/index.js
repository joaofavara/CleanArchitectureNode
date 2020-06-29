const useCase = require('../useCase');

const makePostProduct = require('./saveProduct');

const postProduct = makePostProduct(useCase.saveProduct);

module.exports = {
    postProduct,
}