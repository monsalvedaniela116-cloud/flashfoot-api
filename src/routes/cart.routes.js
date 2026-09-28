const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

router.get('/', cartController.obtenerCarrito);
router.post('/items', cartController.agregarAlCarrito);

module.exports = router;