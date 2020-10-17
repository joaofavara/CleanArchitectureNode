export default (dbGetOneProduct) => {
    return async (id) => {
        const data = await dbGetOneProduct(id);
    
        return data;
    }
}