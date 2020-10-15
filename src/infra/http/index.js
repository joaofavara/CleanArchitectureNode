const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('./middlewares/connectDatabase');
const handlerError = require('./middlewares/handlerError');
const router = require('./router');

const app = express();

app.use(bodyParser.json());

app.use(mongodb);
app.use('/api', router);
app.use(handlerError);

app.listen(3000, () => {
    console.log('Application is running ...');
});