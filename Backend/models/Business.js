const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  contactInfo: { type: String, required: true },
  description: { type: String, required: true },
  careerPathways: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Career' }],
  qrCodeLink: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
