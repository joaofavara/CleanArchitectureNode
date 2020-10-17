import makeGetAllProducts from './makeGetAllProducts';
import makeSaveProduct from './makeSaveProduct';
import { saveProduct, getAllProducts} from '../database/product';

const getAll = makeGetAllProducts(getAllProducts);
const save = makeSaveProduct(saveProduct);

export {
    getAll,
    save
}