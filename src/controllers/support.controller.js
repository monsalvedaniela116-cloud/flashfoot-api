const tickets = require('../models/ticket.model');

const crearTicket = (req, res) => {
  const ticket = { id: `TCK_${tickets.length + 1}`, ...req.body, estado: 'ABIERTO' };
  tickets.push(ticket);
  res.status(201).json({ success: true, message: 'Ticket registrado', data: ticket });
};

module.exports = { crearTicket };