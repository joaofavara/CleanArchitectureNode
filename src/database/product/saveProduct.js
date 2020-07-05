module.exports = function makeSaveProduct(model, validation) {
    return async function saveProduct(payload) {
        try {
            validation(payload);
            const result = await model.create({
                type: 'product',
                name: payload.name,
                cost: payload.cost,
                quantity: payload.quantity,
                description: payload.description,
            });
            return validation(result);
        } catch (error) {
            next(error);
        }
    }
}