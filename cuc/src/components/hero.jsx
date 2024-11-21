import React from "react";
import { motion } from "framer-motion"; 

const Hero = ({ title, subtitle, buttonText, imageSrc }) => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center lg:h-[400px]" 
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      {/* Full gradient covering the entire header */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary to-transparent opacity-70"></div>
      <div className="relative flex items-center justify-center sm:justify-start h-full text-white px-6">
        <motion.div
          className="w-full sm:w-[70%] md:w-[50%] space-y-4 p-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans">{title}</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-sans">{subtitle}</p>
          <motion.button
            className="bg-accent text-white py-2 px-6 rounded-full mt-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  title: "Bringing degrees close to regional, rural and remote Australia.",
  subtitle: "Explore opportunities in higher education, wherever you are.",
  buttonText: "Learn More",
  imageSrc: "https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/02/CUCBN-Female-Students-Banner-2000x839-1.jpg", // Default image path
};

export default Hero;
