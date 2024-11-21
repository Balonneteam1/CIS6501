const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  page: { type: String, required: true },
  views: { type: Number, default: 0 },
  scans: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
