const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.obtenerProductos);
router.get('/search', productsController.buscarProductos);
router.get('/inventory/:productId', productsController.obtenerInventario);

module.exports = router;