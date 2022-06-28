const express = require ('express');
const router = express.Router();
const CategoryController = require ('../controllers/CategoryController');
const ProductController = require ('../controllers/ProductController');
const FindManyProductsInCategoryController = require ('../controllers/FindManyProductsInCategoryController');

router.get('/category/detail/:id', FindManyProductsInCategoryController.showProductInCategory)

router.get('/category', CategoryController.showCategory)
router.get('/category/:id', CategoryController.getCategory)
router.post('/category', CategoryController.createCategory)
router.put('/category/:id', CategoryController.updateCategory)
router.delete('/category/:id', CategoryController.deleteCategory)
router.get('/product', ProductController.showProduct)
router.get('/product/:id', ProductController.getProduct)
router.post('/product', ProductController.createProduct)
router.put('/product/:id', ProductController.updateProduct)
router.delete('/product/:id', ProductController.deleteProduct)


module.exports = router;