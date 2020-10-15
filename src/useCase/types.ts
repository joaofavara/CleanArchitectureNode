import { Mongoose, MongooseDocument } from 'mongoose';
import { Product } from '../domain/product/type';


export interface UseCase {
    saveProduct(Product): Promise<MongooseDocument>,
}
