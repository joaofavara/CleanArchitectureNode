const product = require('../product/index');

module.exports = function makeSaveProduct(dbSaveProduct) {
    return async function saveProduct(payload) {
        try {
            return await dbSaveProduct(payload);
        } catch (error) {
            next(error);
        }
    }
}