const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  qrCodeUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const QRCode = mongoose.model('QRCode', qrCodeSchema);

module.exports = QRCode;
