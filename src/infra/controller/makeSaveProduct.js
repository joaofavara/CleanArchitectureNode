const { saveProduct } = require('../../useCase/index');

module.exports = () => {
    return async (req, res, next) => {
        try {
            const body = req.body;
            const result = await saveProduct(body);
            res.status(200).send(result);
        } catch(error) {
            next(error);
        }
    }
}
