import mapper from './mapper';

export default (dbGetAllProducts) => {
    return async () => {
        const data = await dbGetAllProducts();
    
        return mapper(data);
    }
}