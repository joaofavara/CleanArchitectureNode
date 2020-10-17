export default (dbRemoveProduct) => {
    return async (id, payload) => {
        const data = await dbRemoveProduct(id, payload);
    
        return data;
    }
}