import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import ManageQR from '../components/ManageQR';
import BusinessCareerManagement from '../components/BusinessCareerManagement';
import DataAnalytics from '../components/DataAnalytics';
import UserFeedbackReview from '../components/UserFeedbackReview';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); // Default active section
  const navigate = useNavigate();

  const handleSectionChange = (section) => {
    setActiveSection(section);
    navigate(section); // Navigate to relative paths
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col p-6">
        <h2 className="text-3xl font-semibold mb-8">Admin Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          {[
            { label: 'Dashboard', path: 'dashboard' },
            { label: 'Manage QR Codes', path: 'manage-qr' },
            { label: 'Business and Career Management', path: 'business-career' },
            { label: 'Data and Analytics', path: 'data-analytics' },
            { label: 'User Feedback Review', path: 'user-feedback' }
          ].map(({ label, path }) => (
            <button
              key={path}
              className={`w-full text-left p-3 rounded-lg transition-colors duration-200 hover:bg-secondary ${
                activeSection === path ? 'bg-accent' : ''
              }`}
              onClick={() => handleSectionChange(path)}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-qr" element={<ManageQR />} />
          <Route path="business-career" element={<BusinessCareerManagement />} />
          <Route path="data-analytics" element={<DataAnalytics />} />
          <Route path="user-feedback" element={<UserFeedbackReview />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
