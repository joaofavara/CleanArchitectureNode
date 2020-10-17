import productModel from './model';
import connect from './connectDatabase';
import makeSaveProduct from './makeSaveProduct';
import makeGetAllProducts from './makeGetAllProducts';
import makeGetOneProduct from './makeGetOneProduct';
import makeUpdateProduct from './makeUpdateProduct';
import makeRemoveProduct from './makeRemoveProduct';

connect(); // start connection with mongodb
const saveProduct = makeSaveProduct(productModel);
const getAllProducts = makeGetAllProducts(productModel);
const getOneProduct = makeGetOneProduct(productModel);
const updateProduct = makeUpdateProduct(productModel);
const removeProduct = makeRemoveProduct(productModel);

export {
    saveProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    removeProduct,
}