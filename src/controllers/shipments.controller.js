const envios = require('../models/envio.model');

const rastrearEnvio = (req, res) => {
  const trackingNumber = req.params.trackingNumber;
  res.json({
    success: true,
    data: { trackingNumber, estado: 'EN_CAMINO', empresa: 'Flashfoot Express' }
  });
};

module.exports = { rastrearEnvio };