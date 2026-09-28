const pagos = require('../models/pago.model');

const procesarPago = (req, res) => {
  const nuevoPago = {
    transactionId: `TX_${Date.now()}`,
    monto: req.body.monto,
    estado: 'APROBADO',
    fecha: new Date()
  };
  pagos.push(nuevoPago);
  res.status(200).json({ success: true, message: 'Pago procesado exitosamente', data: nuevoPago });
};

module.exports = { procesarPago };