const express = require('express');
const router = express.Router();
const expressCallBack = require('./expressCallBack');
const controller = require('../controller/index');

// router.get('/:id', controller.getOneProduct);
// router.get('/', controller.getAllProducts);
router.post('/', expressCallBack(controller.postProduct));
// router.put('/:id', controller.updateProduct);
// router.delete('/', controller.deleteProduct);

module.exports = router;

