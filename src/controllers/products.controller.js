const productos = require('../models/producto.model');

const obtenerProductos = (req, res) => {
  res.json({ success: true, data: productos });
};

const buscarProductos = (req, res) => {
  const { q } = req.query;
  const resultado = q ? productos.filter(p => p.nombre.toLowerCase().includes(q.toLowerCase())) : productos;
  res.json({ success: true, data: resultado });
};

const obtenerInventario = (req, res) => {
  const producto = productos.find(p => p.id === req.params.productId);
  if (!producto) return res.status(404).json({ success: false, message: 'Producto no encontrado' });
  res.json({ success: true, productId: producto.id, stock: producto.stock });
};

module.exports = {
  obtenerProductos,
  buscarProductos,
  obtenerInventario
};