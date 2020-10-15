import * as Joi from 'joi';
 
const schema = Joi.object().keys({
    name: Joi.string().required(),
    cost: Joi.number().required(),
    quantity: Joi.number().required(),
    description: Joi.string().required(),
});

export default schema;