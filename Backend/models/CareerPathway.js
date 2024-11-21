const mongoose = require('mongoose');

const CareerPathwaySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  steps: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CareerPathway', CareerPathwaySchema);
