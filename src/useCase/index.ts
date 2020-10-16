import { getAllProducts as getProducts, saveProduct as save} from '../infra/database/product';

import makeGetAllProducts from './get/makeGetAllProducts';
import makeSaveProduct from './post/makeSaveProduct';
// const getAllProducts = require('./getAllProducts');
// const getOneProduct = require('./getOneProduct');
// const updateProduct = require('./updateProduct');
// const deleteProduct = require('./deleteProduct');

const saveProduct = makeSaveProduct(save);
const getAllProducts = makeGetAllProducts(getProducts);

export {
    getAllProducts,
    saveProduct,
    //getOneProduct,
    // updateProduct,
    // deleteProduct,
}
