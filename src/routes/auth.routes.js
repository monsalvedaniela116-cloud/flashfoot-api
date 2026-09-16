// auth.routes.js
// Define las URLs relacionadas con autenticación y las conecta
// con las funciones correspondientes del controlador.

const express = require('express');
const router = express.Router();

const { registrar, login } = require('../controllers/auth.controller');

// POST http://localhost:3000/api/auth/registro
router.post('/registro', registrar);

// POST http://localhost:3000/api/auth/login
router.post('/login', login);

module.exports = router;