const buildMakeProduct = require('./model');
const produtoSchema = require('./schemas');
const productValidator = require('./validation')(produtoSchema);

const makeProduct = buildMakeProduct(productValidator);

module.exports = { 
    makeProduct
};
