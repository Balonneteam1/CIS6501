import React, { useEffect, useState } from 'react';

import {
  getBusinesses,
  createBusiness,
  updateBusiness,
  deleteBusiness,
  getCareers,
  createCareer,
  updateCareer,
  deleteCareer,
  getCareerPathways,
  createCareerPathway,
  updateCareerPathway,
  deleteCareerPathway,
} from '../service';
import Modal from './Modal';
import BusinessTab from './BusinessTab';
import CareerTab from './CareerTab';  
import CareerPathwayTab from './CareerPathwayTab';

const BusinessCareerManagement = () => {
  const [activeTab, setActiveTab] = useState('business'); // Active tab state
  const [businesses, setBusinesses] = useState([]);
  const [careers, setCareers] = useState([]);
  const [careerPathways, setCareerPathways] = useState([]);

  useEffect(() => {
    fetchBusinesses();
    fetchCareers();
    fetchCareerPathways();
  }, []);

  const fetchBusinesses = async () => {
    try {
      const data = await getBusinesses();
      setBusinesses(data);
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  };

  const fetchCareers = async () => {
    try {
      const data = await getCareers();
      setCareers(data);
    } catch (error) {
      console.error('Error fetching careers:', error);
    }
  };

  const fetchCareerPathways = async () => {
    try {
      const data = await getCareerPathways();
      setCareerPathways(data);
    } catch (error) {
      console.error('Error fetching career pathways:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Management Dashboard</h1>
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`py-2 px-4 rounded ${
            activeTab === 'business' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('business')}
        >
          Business Management
        </button>
        <button
          className={`py-2 px-4 rounded ${
            activeTab === 'career' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('career')}
        >
          Career Management
        </button>
        <button
          className={`py-2 px-4 rounded ${
            activeTab === 'careerPathway' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('careerPathway')}
        >
          Career Pathway Management
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === 'business' && (
          <BusinessTab businesses={businesses} fetchBusinesses={fetchBusinesses} />
        )}
        {activeTab === 'career' && <CareerTab careers={careers} fetchCareers={fetchCareers} />}
        {activeTab === 'careerPathway' && (
          <CareerPathwayTab
            careerPathways={careerPathways}
            fetchCareerPathways={fetchCareerPathways}
          />
        )}
      </div>
    </div>
  );
};

export default BusinessCareerManagement;
