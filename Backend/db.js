const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB connection string
    const uri = 'mongodb://localhost:27017/CUCHorizons';

    // Connect to MongoDB without deprecated options
    await mongoose.connect(uri);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
