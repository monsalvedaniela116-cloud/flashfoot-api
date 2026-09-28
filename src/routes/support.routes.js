const express = require('express');
const router = express.Router();
const supportController = require('../controllers/support.controller');

router.post('/tickets', supportController.crearTicket);

module.exports = router;