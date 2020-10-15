module.exports = (model) => {
    return async (payload) => {
        try {
            return await model.create({
                type: 'product',
                name: payload.name,
                cost: payload.cost,
                quantity: payload.quantity,
                description: payload.description,
            });
        } catch (error) {
            next(error);
        }
    }
}