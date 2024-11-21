import React, { useEffect, useState } from 'react';
import { getAllFeedback } from '../service'; // Adjust path if necessary

const UserFeedbackReview = () => {
  const [feedbacks, setFeedbacks] = useState([]);  // Store the fetched feedbacks
  const [loading, setLoading] = useState(true);    // Track loading state
  const [error, setError] = useState(null);        // Handle errors if any

  // Fetch feedbacks when the component mounts
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const data = await getAllFeedback();  // Use the getAllFeedback function
        setFeedbacks(data);  // Store the fetched feedbacks in the state
        setLoading(false);   // Set loading to false once data is fetched
      } catch (err) {
        setError('Error fetching feedback');  // Handle error if the API call fails
        setLoading(false);
      }
    };

    fetchFeedback();  // Call the fetchFeedback function on component mount
  }, []);

  if (loading) {
    return <div className="text-center text-xl text-primary">Loading feedback...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-background p-6 sm:p-10 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">User Feedback Review</h1>
          <p className="text-lg text-secondary">Review feedback from users and take action accordingly.</p>
        </header>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.length === 0 ? (
            <div className="text-center text-lg text-secondary">No feedback available.</div>
          ) : (
            feedbacks.map((feedback, index) => (
              <div key={feedback._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-semibold text-secondary mb-4">Feedback from {feedback.name || `User ${index + 1}`}</h2>
                <p className="text-base text-gray-600 mb-4">"{feedback.message || 'No comments provided.'}"</p>
                <p className="text-sm text-gray-500 mb-4">Email: {feedback.email}</p>
                <p className="text-sm text-gray-500">Submitted on: {new Date(feedback.createdAt).toLocaleDateString()}</p>
                <button className="w-full py-2 px-4 bg-primary text-white rounded-full hover:bg-accent transition duration-300">
                  Take Action
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserFeedbackReview;
