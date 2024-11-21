import React from 'react';
import { motion } from 'framer-motion'; 
import Hero from '../components/hero'; 
import QrSection from '../components/QrSection';
import CareerAndBusinessDirectory from '../components/CareerAndBusinessDirectory';
import StudentInfo from '../components/Studentinfo';
import FeedbackForm from './FeedbackForm';

const HomePage = () => {
    return (
      <div>
        {/* Hero Section */}
        <Hero 
          title="Welcome to CUC Horizons!"
          subtitle="Connecting you to local businesses, career opportunities, and valuable resources."
          buttonText="Start Exploring"
          imageSrc="https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/02/CUCBN-Female-Students-Banner-2000x839-1.jpg"
        />
  
       <QrSection />
        {/* Career & Business Directory */}


     <CareerAndBusinessDirectory />
  
     <StudentInfo /> 

        {/* Feedback and Suggestions */}    
        <FeedbackForm/>
      </div>
    );
  };
  
  export default HomePage;