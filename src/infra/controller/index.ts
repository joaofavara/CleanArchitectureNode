import makeSaveProduct from './makeSaveProduct';
import { saveProduct } from '../../useCase/index';

const postProduct = makeSaveProduct(saveProduct);

export {
    postProduct,
}