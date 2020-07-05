const useCase = require('../useCase');

const makePostProduct = require('./saveProduct');

const postProduct = makePostProduct();

module.exports = {
    postProduct,
}