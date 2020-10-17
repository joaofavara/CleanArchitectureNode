export default (model) => {
    return async (id, payload) => 
        await model.findOneAndUpdate({
            _id: id
        },{
            type: 'product',
            name: payload.name,
            cost: payload.cost,
            quantity: payload.quantity,
            description: payload.description,
        });
}