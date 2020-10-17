export default (model) => {
    return async (id) => 
        await model.findByIdAndRemove({
           _id: id
        });
}