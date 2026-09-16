// index.js
// Punto de entrada de la API de FlashFoot.

const express = require('express');
const authRoutes = require('./routes/auth.routes'); // Traemos las rutas de auth

const app = express();
const PUERTO = 3000;

// Middleware: permite que Express entienda JSON en el body de las peticiones.
// Sin esto, peticion.body llegaría undefined.
app.use(express.json());

// Ruta de prueba
app.get('/', (peticion, respuesta) => {
  respuesta.send('API de FlashFoot funcionando correctamente 🎾');
});

// Todas las rutas de auth.routes.js quedan disponibles bajo /api/auth
// Ejemplo real: POST http://localhost:3000/api/auth/registro
app.use('/api/auth', authRoutes);

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});