import makeSaveProduct from './makeSaveProduct';
import makeGetAllProducts from './makeGetAllProducts';
import makeDeleteProduct from './makeDeleteProduct';
import makeGetOneProduct from './makeGetOneProduct';
import makeUpdateProduct from './makeUpdateProduct';
import {
    saveProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    removeProduct,
} from '../../useCase/index';

const postProduct = makeSaveProduct(saveProduct);
const getProducts = makeGetAllProducts(getAllProducts);
const getProduct = makeGetOneProduct(getOneProduct);
const putProduct = makeUpdateProduct(updateProduct);
const deleteProduct = makeDeleteProduct(removeProduct);

export {
    postProduct,
    getProducts,
    getProduct,
    putProduct,
    deleteProduct,
}