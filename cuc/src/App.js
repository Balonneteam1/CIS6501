import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/header'; 
import Footer from './components/Footer';
import HomePage from './pages/homepage'; 
import FeedbackForm from './pages/FeedbackForm';
import StudentEngagementPage from './pages/StudentEnagement';
import Logincomponent from './pages/logincomponent';
import AdminDashboard from './pages/admindashboard';
import { LoginProvider } from './context/logincontext';
import CareerAndBusinessPage from './pages/CareerAndBusinessPage';
import AboutUsPage from './pages/Aboutus';



function App() {
  return (
    <LoginProvider>
    <Router>
      <Header />
      <Routes>
        {/* Define the HomePage route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/engagement" element={<StudentEngagementPage />} />
        <Route path="/login" element={<Logincomponent />} />
        <Route path="/career" element={<CareerAndBusinessPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />

      </Routes>
      <Footer />
    </Router>
    </LoginProvider>
  );
}

export default App;
