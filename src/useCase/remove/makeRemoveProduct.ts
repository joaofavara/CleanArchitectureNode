export default (dbOneAllProduct) => {
    return async (id) => {
        const data = await dbOneAllProduct(id);
    
        return data;
    }
}