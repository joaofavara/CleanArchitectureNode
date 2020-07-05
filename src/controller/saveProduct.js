const useCase = require('../useCase/index');

module.exports = function makePostProduct() {
    return async function postProduct (req, res) {
        try {
            const body = req.body;
            const result = await useCase.saveProduct(body);
            res.status(200).send(result);
        } catch(error) {
            console.log(error);
            res.status(404).send(error);
        }
    }
}
