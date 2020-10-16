export default (model) => {
    return async () => 
        await model.find({
            type: 'product',
        });
}