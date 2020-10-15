const express = require('express');
const router = express.Router();
const controller = require('../controller');

// router.get('/:id', controller.getOneProduct);
// router.get('/', controller.getAllProducts);
router.post('/', controller.postProduct);
// router.put('/:id', controller.updateProduct);
// router.delete('/', controller.deleteProduct);

module.exports = router;

