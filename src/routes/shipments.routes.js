const express = require('express');
const router = express.Router();
const shipmentsController = require('../controllers/shipments.controller');

router.get('/track/:trackingNumber', shipmentsController.rastrearEnvio);

module.exports = router;