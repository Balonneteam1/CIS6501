// CareerAndBusinessDirectory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import BusinessCard from './BusinessCard';  // Import the BusinessCard component

const CareerAndBusinessDirectory = () => {
  return (
    <section className="py-16 px-6 bg-white mb-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Career & Business Directory</h2>
        <p className="text-lg mb-8">
          Browse our directory to find local businesses and career opportunities in your area. Filter by industry, job type, or location.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pass business name and description as props */}
          <BusinessCard 
            name="Tech Solutions Inc." 
            description="A leading IT services company offering software development, cybersecurity, and cloud solutions." 
          />
          
          <BusinessCard 
            name="Green Thumb Landscaping" 
            description="Providing expert landscaping services for residential and commercial properties. Specializing in sustainable gardening." 
          />
          
          <BusinessCard 
            name="Healthwise Medical Center" 
            description="Offering comprehensive healthcare services including general practice, specialized treatments, and health consultations." 
          />
          
          <BusinessCard 
            name="Creative Marketing Agency" 
            description="A digital marketing agency focusing on SEO, content creation, social media management, and branding." 
          />
          
          <BusinessCard 
            name="Elite Construction" 
            description="Expert builders specializing in residential and commercial construction, from new builds to renovations." 
          />
          
          <BusinessCard 
            name="Sparkling Clean Services" 
            description="Professional cleaning services for homes, offices, and industrial spaces. Specializing in eco-friendly cleaning solutions." 
          />
        </div>
        <motion.a
          href="#"
          className="inline-block mt-8 bg-accent text-white py-2 px-6 rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Explore the Directory
        </motion.a>
      </div>
    </section>
  );
};

export default CareerAndBusinessDirectory;
