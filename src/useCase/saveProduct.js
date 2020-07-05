const product = require('../product/index');

module.exports = function makeSaveProduct(dbSaveProduct) {
    return async function saveProduct(payload) {
        try {
            const result = await dbSaveProduct(payload);
            return product.makeProduct(result);
        } catch (error) {
            next(error);
        }
    }
}