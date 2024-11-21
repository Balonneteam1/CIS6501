import React, { useState } from 'react';
import Modal from './Modal';
import { createBusiness, updateBusiness, deleteBusiness } from '../service';

const BusinessTab = ({ businesses, fetchBusinesses }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBusiness, setCurrentBusiness] = useState({
    name: '',
    industry: '',
    location: '',
    description: '',
    contactInfo: '',
    qrCodeLink: '',
  });

  const handleOpenModal = (business = null) => {
    if (business) {
      setCurrentBusiness(business);
    } else {
      setCurrentBusiness({
        name: '',
        industry: '',
        location: '',
        description: '',
        contactInfo: '',
        qrCodeLink: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      if (currentBusiness._id) {
        await updateBusiness(currentBusiness._id, currentBusiness);
      } else {
        await createBusiness(currentBusiness);
      }
      setIsModalOpen(false);
      fetchBusinesses();
    } catch (error) {
      console.error('Error saving business:', error);
    }
  };

  const handleDelete = async (businessId) => {
    try {
      await deleteBusiness(businessId);
      fetchBusinesses();
    } catch (error) {
      console.error('Error deleting business:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Businesses</h2>
      <button
        onClick={() => handleOpenModal()}
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Add Business
      </button>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Industry</th>
              <th className="p-4 border">Location</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((business) => (
              <tr key={business._id} className="hover:bg-gray-50">
                <td className="p-4 border">{business.name}</td>
                <td className="p-4 border">{business.industry}</td>
                <td className="p-4 border">{business.location}</td>
                <td className="p-4 border">
                  <button
                    className="text-blue-500 hover:underline mr-4"
                    onClick={() => handleOpenModal(business)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(business._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {currentBusiness._id ? 'Edit Business' : 'Add Business'}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Enter business name"
              value={currentBusiness.name}
              onChange={(e) =>
                setCurrentBusiness({ ...currentBusiness, name: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <input
              type="text"
              placeholder="Enter industry"
              value={currentBusiness.industry}
              onChange={(e) =>
                setCurrentBusiness({
                  ...currentBusiness,
                  industry: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter location"
              value={currentBusiness.location}
              onChange={(e) =>
                setCurrentBusiness({
                  ...currentBusiness,
                  location: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter description"
              value={currentBusiness.description}
              onChange={(e) =>
                setCurrentBusiness({
                  ...currentBusiness,
                  description: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Info
            </label>
            <input
              type="text"
              placeholder="Enter contact info"
              value={currentBusiness.contactInfo}
              onChange={(e) =>
                setCurrentBusiness({
                  ...currentBusiness,
                  contactInfo: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              QR Code Link
            </label>
            <input
              type="text"
              placeholder="Enter QR code link"
              value={currentBusiness.qrCodeLink}
              onChange={(e) =>
                setCurrentBusiness({
                  ...currentBusiness,
                  qrCodeLink: e.target.value,
                })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default BusinessTab;
