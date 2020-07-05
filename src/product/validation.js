const Joi = require('joi'); 

module.exports = (schema) => {
    return ({name, cost, quantity, description}) => {
        const result = Joi.validate({ name, cost, quantity, description }, schema);

        if (result.error !== null) {
            throw new Error('validation');
        }
    }
}