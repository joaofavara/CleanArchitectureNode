const Joi = require('joi'); 

module.exports = (schema) => {
    return ({name, cost, quantity, description}) => Joi.validate({ name, cost, quantity, description }, schema);
}