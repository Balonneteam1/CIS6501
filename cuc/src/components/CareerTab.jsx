import React, { useState } from 'react';
import Modal from './Modal';
import { createCareer, updateCareer, deleteCareer } from '../service'; // Assuming these API functions exist

const CareerTab = ({ careers, fetchCareers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCareer, setCurrentCareer] = useState({
    title: '',
    description: '',
    salaryRange: '',
  });

  const handleOpenModal = (career = null) => {
    if (career) {
      setCurrentCareer(career);
    } else {
      setCurrentCareer({
        title: '',
        description: '',
        salaryRange: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      if (currentCareer._id) {
        // Update existing career
        await updateCareer(currentCareer._id, currentCareer);
      } else {
        // Create a new career
        await createCareer(currentCareer);
      }
      setIsModalOpen(false);
      fetchCareers(); // Refresh the careers list
    } catch (error) {
      console.error('Error saving career:', error);
    }
  };

  const handleDelete = async (careerId) => {
    try {
      await deleteCareer(careerId);
      fetchCareers(); // Refresh the careers list
    } catch (error) {
      console.error('Error deleting career:', error);
    }
  };

  return (
    <div className="p-6 bg-background rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-secondary mb-6">Manage Careers</h2>
      <button
        onClick={() => handleOpenModal()}
        className="mb-6 px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-accent transition"
      >
        Add Career
      </button>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
              <th className="p-4 border">Title</th>
              <th className="p-4 border">Description</th>
              <th className="p-4 border">Salary Range</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((career) => (
              <tr key={career._id} className="hover:bg-gray-50">
                <td className="p-4 border">{career.title}</td>
                <td className="p-4 border">{career.description}</td>
                <td className="p-4 border">{career.salaryRange}</td>
                <td className="p-4 border">
                  <button
                    className="text-blue-500 hover:underline mr-4"
                    onClick={() => handleOpenModal(career)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(career._id)}
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
        <h2 className="text-2xl font-bold text-secondary mb-4">
          {currentCareer._id ? 'Edit Career' : 'Add Career'}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Career Title
            </label>
            <input
              type="text"
              placeholder="Enter career title"
              value={currentCareer.title}
              onChange={(e) =>
                setCurrentCareer({ ...currentCareer, title: e.target.value })
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
              placeholder="Enter career description"
              value={currentCareer.description}
              onChange={(e) =>
                setCurrentCareer({ ...currentCareer, description: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary Range
            </label>
            <input
              type="text"
              placeholder="Enter salary range"
              value={currentCareer.salaryRange}
              onChange={(e) =>
                setCurrentCareer({ ...currentCareer, salaryRange: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-accent transition"
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CareerTab;
