export default (db) => {
    return async (id, payload) => await db(id, payload);
}