module.exports = function makeSaveProduct(dbSaveProduct) {
    return async function saveProduct(payload) {
        try {
            await dbSaveProduct(payload);
        } catch (error) {
            console.log(error);
        }
    }
}