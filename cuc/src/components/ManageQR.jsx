import React, { useState, useEffect } from 'react';
import { createQRCode, getQRCodes, deleteQRCode, getBusinesses } from '../service'; 
import Modal from './Modal'; 

const ManageQR = () => {
  const [qrCodes, setQRCodes] = useState([]);
  const [businesses, setBusinesses] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [qrData, setQrData] = useState(''); 
  const [selectedBusiness, setSelectedBusiness] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const qrCodeData = await getQRCodes(); 
        setQRCodes(qrCodeData); 
        const businessData = await getBusinesses(); 
        setBusinesses(businessData); 
        setLoading(false); 
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
      }
    };
    fetchData(); 
  }, []);

const handleCreateQRCode = async () => {
  if (!selectedBusiness) {
    alert('Please select a business');
    return;
  }

  const qrCodeUrl = `https://yourwebsite.com/business/${selectedBusiness}`; 

  try {
    const newQRCode = await createQRCode({ businessId: selectedBusiness, url: qrCodeUrl });
    setQRCodes((prev) => [...prev, newQRCode]); 
    setIsModalOpen(false); 
  } catch (err) {
    console.error('Error creating QR code:', err);
    alert('Error creating QR code. Please try again.');
  }
};

  const handleDeleteQRCode = async (qrCodeId) => {
    try {
      await deleteQRCode(qrCodeId); 
      setQRCodes((prev) => prev.filter((code) => code._id !== qrCodeId)); 
    } catch (err) {
      console.error('Error deleting QR code:', err);
    }
  };

  if (loading) {
    return <div>Loading QR codes and businesses...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage QR Codes</h1>
      <p>Here you can manage the QR codes for businesses and careers.</p>

      {/* Button to open modal for creating QR code */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create New QR Code
      </button>

      {/* Modal for creating new QR code */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Create New QR Code</h2>
        
        {/* Dropdown to select business */}
        <select
          value={selectedBusiness}
          onChange={(e) => setSelectedBusiness(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="">Select Business</option>
          {businesses.map((business) => (
            <option key={business._id} value={business._id}>
              {business.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter data for QR code"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleCreateQRCode}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create QR Code
        </button>
      </Modal>

      {/* Displaying the list of QR codes */}
      <div className="mt-8">
        {qrCodes.length === 0 ? (
          <p>No QR codes available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qrCodes.map((qrCode) => (
              <div key={qrCode._id} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="font-bold text-lg">QR Code Data: {qrCode.data}</p>
                <p className="text-gray-600">Business: {qrCode.businessId.name}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleDeleteQRCode(qrCode._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete QR Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageQR;
