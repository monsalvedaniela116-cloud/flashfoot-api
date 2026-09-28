// index.js
// Punto de entrada de la API de FlashFoot.

const express = require('express');

// Rutas
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');
const paymentRoutes = require('./routes/payments.routes');
const shipmentRoutes = require('./routes/shipments.routes');
const supportRoutes = require('./routes/support.routes');

const app = express();
const PUERTO = 3000;

app.use(express.json());

// Ruta de prueba
app.get('/', (peticion, respuesta) => {
  respuesta.send('API de FlashFoot funcionando correctamente ⚡');
});

// Registrar endpoints de la API
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/shipments', shipmentRoutes);
app.use('/api/support', supportRoutes);

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});