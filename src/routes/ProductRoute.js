'use strict';
const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/', productController.index);
router.get('/:idProduct', productController.detail);
router.post('/add', productController.add);
router.put('/modify', productController.modify);

module.exports = router;
