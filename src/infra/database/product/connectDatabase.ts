import { connect } from 'mongoose';

export default async () => { 
    try {
        await connect('mongodb://localhost:27017/products', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Mongo connected ...');
    } catch (error) {
       throw new Error(error);
    }
}