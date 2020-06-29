const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('../database/connectDatabase');
const router = require('./router');

mongodb();
const app = express();

app.use(bodyParser.json());

app.use('/api', router);

app.listen(3000, () => {
    console.log('Application is running ...');
});