import productModel from './model';
import makeSaveProduct from './makeSaveProduct';
import makeGetAllProducts from './makeGetAllProducts';

const saveProduct = makeSaveProduct(productModel);
const getAllProducts = makeGetAllProducts(productModel);

export {
    saveProduct,
    getAllProducts
}