import * as express from 'express';
const router = express.Router();
import { postProduct, getProducts } from '../controller';

// router.get('/:id', controller.getOneProduct);
router.get('/', getProducts);
router.post('/save', postProduct);
// router.put('/:id', controller.updateProduct);
// router.delete('/', controller.deleteProduct);

export default router;

