import productModel from './model';
import makeSaveProduct from './makeSaveProduct';

const saveProduct = makeSaveProduct(productModel);

export {
    saveProduct
}