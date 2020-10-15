const produtoSchema = require('./schemas');
const productValidator = require('./validation')(produtoSchema);

module.exports = { 
    productValidator
};
