const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/payments.controller');

router.post('/checkout', paymentsController.procesarPago);

module.exports = router;