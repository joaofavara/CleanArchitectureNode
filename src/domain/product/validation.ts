import * as Joi from 'joi'; 

export default (schema) => {
    return ({name, cost, quantity, description}) => Joi.validate({ name, cost, quantity, description }, schema);
}