import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitFeedback } from '../service';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState(''); // Add state for the status message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitFeedback(formData); // Use the service to submit feedback
      setStatusMessage(response.message); // Display success message
      setFormData({ name: '', email: '', message: '' }); // Reset the form
    } catch (error) {
      setStatusMessage('Error submitting feedback. Please try again.'); // Display error message
    }
  };

  return (
    <section className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-secondary mb-4">Your Feedback Matters</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
        We would love to hear from you! Suggest new businesses, careers, or resources to help us improve our platform.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 max-w-5xl mx-auto">
        {/* Image Section */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="/feedback.webp"
            alt="Feedback illustration"
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 font-serif bg-white p-10 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border border-gray-200 mt-8 md:mt-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="absolute -top-2 left-4 px-1 bg-white text-gray-500 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition duration-200"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="absolute -top-2 left-4 px-1 bg-white text-gray-500 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition duration-200"
                required
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="absolute -top-2 left-4 px-1 font-serif bg-white text-gray-500 text-sm">Feedback</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your feedback or suggestions..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition duration-200"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="bg-primary text-white font-semibold py-3 px-8 rounded-full w-full shadow-md hover:bg-primary-dark transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Submit Feedback
            </motion.button>
          </form>
          
          {/* Status Message Display */}
          {statusMessage && (
            <div className="mt-4 text-lg font-semibold text-gray-700">
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
