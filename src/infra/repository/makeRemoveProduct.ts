export default (db) => {
    return async (id) => await db(id);
}