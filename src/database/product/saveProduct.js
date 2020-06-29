module.exports = function makeSaveProduct(model) {
    return async function saveProduct(payload) {
        try {
            await model.create({
                type: payload.type,
                name: payload.name,
                cost: payload.cost,
                quantity: payload.quantity,
                description: payload.description,
            })
        } catch (error) {
            console.log(error)
        }
    }
}