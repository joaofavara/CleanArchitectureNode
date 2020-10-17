import productModel from './model';
import connect from './connectDatabase';
import makeSaveProduct from './makeSaveProduct';
import makeGetAllProducts from './makeGetAllProducts';

connect(); // start connection with mongodb
const saveProduct = makeSaveProduct(productModel);
const getAllProducts = makeGetAllProducts(productModel);

export {
    saveProduct,
    getAllProducts
}