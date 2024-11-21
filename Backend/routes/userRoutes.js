const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Import all controllers
const {
  createBusiness,
  getBusinesses,
  updateBusiness,
  deleteBusiness,
  createCareer,
  getCareers,
  updateCareer,
  deleteCareer,
  submitFeedback,
  getAllFeedback,
  deleteFeedback,
  submitSuggestion,
  getAllSuggestions,
  deleteSuggestion,
  createQRCode,
  getQRCodes,
  deleteQRCode,
  getAnalytics,
  updateAnalytics,createCareerPathway,getCareerPathways,getCareerPathwayById,updateCareerPathway,deleteCareerPathway
} = require('../controllers/userController');

const {
  registerUser,
  logoutUser,
  loginUser
} = require('../controllers/authController');


// Route to create a new CareerPathway
router.post('/career-pathways', createCareerPathway);

// Route to get all CareerPathways
router.get('/career-pathways',getCareerPathways);

// Route to get a single CareerPathway by ID
router.get('/career-pathways/:id', getCareerPathwayById);

// Route to update a CareerPathway
router.put('/career-pathways/:id', updateCareerPathway);

// Route to delete a CareerPathway
router.delete('/career-pathways/:id',deleteCareerPathway);





// ------------------ Business Routes ------------------

// Create new business
router.post('/business', createBusiness);

// Get all businesses
router.get('/business', getBusinesses);

// Update business
router.put('/business/:businessId', updateBusiness);

// Delete business
router.delete('/business/:businessId', deleteBusiness);

// ------------------ Career Routes ------------------

// Create new career
router.post('/career', createCareer);

// Get all careers
router.get('/career', getCareers);

// Update career
router.put('/career/:careerId', updateCareer);

// Delete career
router.delete('/career/:careerId', deleteCareer);

// ------------------ Feedback Routes ------------------

// Submit feedback
router.post('/feedback', submitFeedback);

// Get all feedback (admin)
router.get('/feedback', getAllFeedback);


// ------------------ Suggestions Routes ------------------

// Submit suggestion
router.post('/suggestion', submitSuggestion);

// Get all suggestions (admin)
router.get('/suggestion', getAllSuggestions);

// Delete suggestion
router.delete('/suggestion/:suggestionId', deleteSuggestion);

// ------------------ QR Code Routes ------------------

// Create QR code
router.post('/qrcode', createQRCode);

// Get all QR codes
router.get('/qrcode', getQRCodes);

// Delete QR code
router.delete('/qrcode/:qrCodeId', deleteQRCode);

// ------------------ Analytics Routes ------------------

// Get analytics data
router.get('/analytics', getAnalytics);

// Update analytics
router.put('/analytics/:page', updateAnalytics);

// ------------------ User Routes ------------------

// Register new user (admin or cleaner)
router.post('/register', registerUser);

// Login user (admin or cleaner)
router.post('/login', loginUser);

router.post('/logout', logoutUser);
module.exports = router;
