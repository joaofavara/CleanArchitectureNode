import { getAll, save } from '../infra/repository';

import makeGetAllProducts from './get/makeGetAllProducts';
import makeSaveProduct from './post/makeSaveProduct';
// const getAllProducts = require('./getAllProducts');
// const getOneProduct = require('./getOneProduct');
// const updateProduct = require('./updateProduct');
// const deleteProduct = require('./deleteProduct');

const saveProduct = makeSaveProduct(save);
const getAllProducts = makeGetAllProducts(getAll);

export {
    getAllProducts,
    saveProduct,
    //getOneProduct,
    // updateProduct,
    // deleteProduct,
}
