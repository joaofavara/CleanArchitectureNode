import * as express from 'express';
import { json } from 'body-parser';
// import mongodb from './middlewares/connectDatabase';
import handlerError from './middlewares/handlerError';
import router from './router';

const app = express();

app.use(json());

// app.use(mongodb);
app.use('/api', router);
app.use(handlerError);

app.listen(3000, () => {
    console.log('Application is running ...');
});