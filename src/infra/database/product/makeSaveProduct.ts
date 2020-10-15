export default (model) => {
    return async (payload) => 
        await model.create({
            type: 'product',
            name: payload.name,
            cost: payload.cost,
            quantity: payload.quantity,
            description: payload.description,
        });
}