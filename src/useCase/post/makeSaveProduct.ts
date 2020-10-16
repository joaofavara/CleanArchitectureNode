import productValidator from '../../domain/product';

export default (dbSaveProduct) =>  {
    return async (payload) => {
        const validate = productValidator(payload);
        if (validate.error !== null) {
            throw new Error('validation');
        }

        return await dbSaveProduct(payload);
    }
}