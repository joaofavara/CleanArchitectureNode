import * as express from 'express';
const router = express.Router();
import { postProduct } from '../controller';

// router.get('/:id', controller.getOneProduct);
// router.get('/', controller.getAllProducts);
router.post('/', postProduct);
// router.put('/:id', controller.updateProduct);
// router.delete('/', controller.deleteProduct);

export default router;

