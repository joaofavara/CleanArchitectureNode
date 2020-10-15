const Joi = require('joi');
 
const schema = Joi.object().keys({
    name: Joi.string().required(),
    cost: Joi.number().required(),
    quantity: Joi.number().required(),
    description: Joi.string().required(),
});

module.exports = schema;