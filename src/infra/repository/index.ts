import makeGetAllProducts from './makeGetAllProducts';
import makeSaveProduct from './makeSaveProduct';
import makeGetOneProduct from './makeGetOneProduct';
import makeUpdateProduct from './makeUpdateProduct';
import makeRemoveProduct from './makeRemoveProduct';

import {
    saveProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    removeProduct,
} from '../database/product';

const getAll = makeGetAllProducts(getAllProducts);
const save = makeSaveProduct(saveProduct);
const getOne = makeGetOneProduct(getOneProduct);
const update = makeUpdateProduct(updateProduct);
const remove = makeRemoveProduct(removeProduct);

export {
    save,
    getAll,
    getOne,
    update,
    remove,
}