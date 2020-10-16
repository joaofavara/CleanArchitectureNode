(async () => { 
    const mongoose = require('mongoose');

    try {
        await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
        const db = mongoose.connection;
        db.createCollection('Products');
        const productSchemas = new mongoose.Schema({
            type: String,
            name: String,
            cost: Number,
            quantity: Number,
            description: String,
        });
    
       const model = mongoose.model('Products', productSchemas);

        const data = {
            type: 'teste',
            name: 'name',
            cost: 1000,
            quantity: 1,
            description: 'teste',
        }
        await model.create(data);
        console.log('Mongo connected ...');
    } catch (error) {
        console.log(error);
    }
})();