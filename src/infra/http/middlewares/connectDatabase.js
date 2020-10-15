const mongoose = require('mongoose');

module.exports = async (req, res, next) => { 
    try {
        await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Mongo connected ...');
        next();
    } catch (error) {
        console.log(error);
    }
}