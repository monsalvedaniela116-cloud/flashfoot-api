const carrito = require('../models/carrito.model');

const obtenerCarrito = (req, res) => {
  res.json({ success: true, data: carrito });
};

const agregarAlCarrito = (req, res) => {
  const item = { id: Date.now().toString(), ...req.body };
  carrito.push(item);
  res.status(201).json({ success: true, message: 'Producto agregado al carrito', data: item });
};

module.exports = { obtenerCarrito, agregarAlCarrito };