import { saveProduct as save} from '../infra/database/product';

// const getAllProducts = require('./getAllProducts');
// const getOneProduct = require('./getOneProduct');
import makeSaveProduct from './makeSaveProduct';
// const updateProduct = require('./updateProduct');
// const deleteProduct = require('./deleteProduct');

const saveProduct = makeSaveProduct(save);

export {
    // getAllProducts,
    //getOneProduct,
    saveProduct,
    // updateProduct,
    // deleteProduct,
}
