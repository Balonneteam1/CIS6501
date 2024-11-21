import React, { useState } from 'react';
import Modal from './Modal';

const CareerPathwayTab = ({ careerPathways, fetchCareerPathways }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPathway, setCurrentPathway] = useState({
    title: '',
    description: '',
    steps: [],
  });

  const handleOpenModal = (pathway = null) => {
    if (pathway) {
      setCurrentPathway(pathway);
    } else {
      setCurrentPathway({
        title: '',
        description: '',
        steps: [],
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    // Logic for saving or updating career pathways
    setIsModalOpen(false);
    fetchCareerPathways();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Career Pathways</h2>
      <button
        onClick={() => handleOpenModal()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Career Pathway
      </button>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Steps</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {careerPathways.map((pathway) => (
            <tr key={pathway._id}>
              <td className="border border-gray-300 p-2">{pathway.title}</td>
              <td className="border border-gray-300 p-2">{pathway.description}</td>
              <td className="border border-gray-300 p-2">
                {pathway.steps.join(', ')}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  className="text-blue-600 mr-2"
                  onClick={() => handleOpenModal(pathway)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600"
                  onClick={() => console.log('Delete pathway', pathway._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-semibold mb-4">
          {currentPathway._id ? 'Edit Career Pathway' : 'Add Career Pathway'}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <input
            type="text"
            placeholder="Pathway Title"
            value={currentPathway.title}
            onChange={(e) =>
              setCurrentPathway({ ...currentPathway, title: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={currentPathway.description}
            onChange={(e) =>
              setCurrentPathway({ ...currentPathway, description: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
          ></textarea>
          <textarea
            placeholder="Steps (comma-separated)"
            value={currentPathway.steps.join(', ')}
            onChange={(e) =>
              setCurrentPathway({
                ...currentPathway,
                steps: e.target.value.split(',').map((step) => step.trim()),
              })
            }
            className="w-full p-2 mb-4 border rounded"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CareerPathwayTab;
