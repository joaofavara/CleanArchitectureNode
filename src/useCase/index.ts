import {
    getAll,
    save,
    getOne,
    update,
    remove,
} from '../infra/repository';

import makeSaveProduct from './post/makeSaveProduct';
import makeGetAllProducts from './get/makeGetAllProducts';
import makeGetOneProduct from './get/makeGetOneProduct';
import makeUpdateProduct from './update/makeUpdateProduct';
import makeRemoveProduct from './remove/makeRemoveProduct';

const saveProduct = makeSaveProduct(save);
const getAllProducts = makeGetAllProducts(getAll);
const getOneProduct = makeGetOneProduct(getOne);
const updateProduct = makeUpdateProduct(update);
const removeProduct = makeRemoveProduct(remove);

export {
    getAllProducts,
    saveProduct,
    getOneProduct,
    updateProduct,
    removeProduct,
}
