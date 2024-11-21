import React, { useState, useEffect } from 'react';
import { getCareers, getBusinesses } from '../service';
import { QRCodeCanvas } from 'qrcode.react';
import Hero from '../components/hero';
import { FaMapMarkerAlt, FaBriefcase, FaCheck } from 'react-icons/fa'; // Import icons

const CareerAndBusinessPage = () => {
  const [careers, setCareers] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [loadingCareers, setLoadingCareers] = useState(true);
  const [loadingBusinesses, setLoadingBusinesses] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const careersData = await getCareers();
        setCareers(careersData);
        setLoadingCareers(false);

        const businessesData = await getBusinesses();
        setBusinesses(businessesData);
        setLoadingBusinesses(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoadingCareers(false);
        setLoadingBusinesses(false);
      }
    };

    fetchData();
  }, []);

  const handleApplyClick = (careerTitle) => {
    alert(`Applied successfully for the ${careerTitle} position!`);
  };

  if (loadingCareers || loadingBusinesses) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-background text-primary">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Hero
        title="Careers & Businesses"
        subtitle="Connecting you to local businesses, career opportunities, and valuable resources."
        buttonText="Start Exploring"
        imageSrc="https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/02/CUCBN-Female-Students-Banner-2000x839-1.jpg"
      />

      <div className="container mx-auto p-6">
        {/* Careers Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">
            Available Careers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.length === 0 ? (
              <p className="text-secondary">No careers available.</p>
            ) : (
              careers.map((career) => {
                const employerId = career.potentialEmployers[0];
                const employer = businesses.find(business => business._id === employerId);

                return (
                  <div
                    key={career._id}
                    className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col"
                  >
                    <h4 className="font-bold text-xl text-secondary mb-2 flex items-center">
                      <FaBriefcase className="mr-2 text-primary" /> {career.title}
                    </h4>
                    <p className="text-gray-700 mb-2">{career.description}</p>
                    <p className="text-gray-500 italic flex items-center">
                      <FaMapMarkerAlt className="mr-1" /> {career.location}
                    </p>
                    {employer && (
                      <div className="mt-4 flex justify-center">
                        <QRCodeCanvas value={employer.qrCodeLink} size={128} />
                      </div>
                    )}
                    <button
                      onClick={() => handleApplyClick(career.title)}
                      className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition"
                    >
                      Apply Now
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Businesses Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">
            Local Businesses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.length === 0 ? (
              <p className="text-secondary">No businesses available.</p>
            ) : (
              businesses.map((business) => (
                <div
                  key={business._id}
                  className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-6"
                >
                  <h4 className="font-bold text-xl text-secondary mb-2 flex items-center">
                    <FaBriefcase className="mr-2 text-primary" /> {business.name}
                  </h4>
                  <p className="text-gray-700 mb-2">{business.description}</p>
                  <p className="text-gray-500 italic flex items-center">
                    <FaMapMarkerAlt className="mr-1" /> {business.location}
                  </p>
                  <div className="mt-4 flex justify-center">
                    {business.qrCodeLink ? (
                      <QRCodeCanvas value={business.qrCodeLink} size={128} />
                    ) : (
                      <p className="text-sm text-gray-400">No QR code available</p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAndBusinessPage;
