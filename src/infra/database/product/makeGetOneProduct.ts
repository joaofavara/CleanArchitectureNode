export default (model) => {
    return async (id) => 
        await model.find({
            type: 'product',
            _id: id,
        });
}