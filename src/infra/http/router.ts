import * as express from 'express';
const router = express.Router();
import { 
    postProduct,
    getProducts,
    getProduct,
    putProduct,
    deleteProduct
} from '../controller';

router.get('/product', getProducts);
router.post('/product', postProduct);
router.get('/product/:id', getProduct);
router.put('/product/:id', putProduct);
router.delete('/product/:id', deleteProduct);

export default router;

