const mongoose = require('mongoose');

const documentationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Documentation = mongoose.model('Documentation', documentationSchema);

module.exports = Documentation;
