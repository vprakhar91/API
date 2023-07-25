const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products_controller');

router.get('/', productsController.products);

router.post('/create', productsController.create);

router.delete('/:productID', productsController.delete);


router.post('/:productID/update_quantity/', productsController.updateQunatity);

module.exports = router;