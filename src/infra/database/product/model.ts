import { model } from 'mongoose';
import productSchemas from './schema';

const productModel = model('Products', productSchemas);

export default productModel;