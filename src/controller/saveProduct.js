module.exports = function makePostProduct(saveProduct) {
    return async function postProduct (req, res) {
        try {
            const body = req.body;
            const result = await saveProduct(body)
            res.send(200, result);
        } catch(error) {
            console.log(error);
        }
    }
}
