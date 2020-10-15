const { productValidator } = require('../domain/product')

module.exports = (dbSaveProduct) =>  {
    return async (payload) => {
        const validate = productValidator(payload);
        if (validate.error !== null) {
            throw new Error('validation');
        }

        return await dbSaveProduct(payload);
    }
}