export default (db) => {
    return async () => await db();
}