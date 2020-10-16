import makeSaveProduct from './makeSaveProduct';
import makeGetAllProducts from './makeGetAllProducts';
import { saveProduct, getAllProducts } from '../../useCase/index';

const postProduct = makeSaveProduct(saveProduct);
const getProducts = makeGetAllProducts(getAllProducts);

export {
    postProduct,
    getProducts,
}