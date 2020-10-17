export default (db) => {
    return async (payload) => await db(payload);
}