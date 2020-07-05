module.exports = function makePostProduct(saveProduct) {
    return async function postProduct (req, res) {
        try {
            const body = req.body;
            const result = await saveProduct(body);
            res.status(200).send(result);
        } catch(error) {
            console.log(error);
            res.status(404).send(error);
        }
    }
}
