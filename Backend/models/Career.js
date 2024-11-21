const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  potentialEmployers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Business' }],
  relatedCareers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Career' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
