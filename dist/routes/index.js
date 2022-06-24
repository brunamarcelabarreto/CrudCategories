"use strict";
const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const ProductController = require('../controllers/ProductController');
router.get('/category', CategoryController.showCategory);
router.get('/category/:id', CategoryController.getCategory);
router.post('/category', CategoryController.createCategory);
router.put('/category/:id', CategoryController.updateCategory);
router.delete('/category/:id', CategoryController.deleteCategory);
router.get('/product', ProductController.showProduct);
router.get('/product', ProductController.getProduct);
router.post('/product', ProductController.createProduct);
router.put('/product', ProductController.updateProduct);
router.delete('/product/:id', ProductController.deleteProduct);
module.exports = router;
//# sourceMappingURL=index.js.map