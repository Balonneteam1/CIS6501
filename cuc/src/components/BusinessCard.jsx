import React from 'react';

const BusinessCard = ({ name, description }) => {
  return (
    <div className="bg-gradient-to-r from-secondary to-accent p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <h3 className="font-serif text-2xl text-white mb-4 font-bold">{name}</h3>
      <p className="text-md text-white opacity-90">{description}</p>
    </div>
  );
};

export default BusinessCard;
