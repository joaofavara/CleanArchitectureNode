module.exports = function makeSaveProduct(model, validation) {
    return async function saveProduct(payload) {
        try {
            validation({ ...payload });
            return await model.create({
                type: 'product',
                name: payload.name,
                cost: payload.cost,
                quantity: payload.quantity,
                description: payload.description,
            })
        } catch (error) {
            next(error);
        }
    }
}