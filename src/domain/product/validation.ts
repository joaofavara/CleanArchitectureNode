import { validate } from 'joi'; 

export default (schema) => {
    return ({name, cost, quantity, description}) => validate({ name, cost, quantity, description }, schema);
}