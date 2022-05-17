"use strict";
//import {Router} from 'express';
const express = require('express');
//const router = Router();
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
//import {getCategory} from '../controllers/CategoryController';
//import {getProduct} from '../controllers/ProductController';
router.get('/category', CategoryController.getCategory);
router.get('/category/:id', CategoryController.showCategory);
router.post('/category', CategoryController.storeCategory);
router.put('/category/:id', CategoryController.updateCategory);
router.delete('/category/:id', CategoryController.deleteCategory);
// router.get('/product', getProduct)
// router.post('/product', getProduct)
// router.put('/product', getProduct)
// router.delete('/product', getProduct)
// router.get('/product', getProduct)
module.exports = router;
