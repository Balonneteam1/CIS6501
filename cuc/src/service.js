import axios from 'axios';

// Set up the base URL for your API
const API_URL = 'http://localhost:5000/api/';

// Helper function to set up headers (e.g., for Authorization token)
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken'); // assuming you're storing the token in localStorage
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ------------------ Business API ------------------

// Create new business
export const createBusiness = async (data) => {
  try {
    const response = await axios.post(`${API_URL}business`, data, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error creating business:', error);
    throw error;
  }
};

// Get all businesses
export const getBusinesses = async () => {
  try {
    const response = await axios.get(`${API_URL}business`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error fetching businesses:', error);
    throw error;
  }
};

// Update business
export const updateBusiness = async (businessId, data) => {
  try {
    const response = await axios.put(`${API_URL}business/${businessId}`, data, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error updating business:', error);
    throw error;
  }
};

// Delete business
export const deleteBusiness = async (businessId) => {
  try {
    const response = await axios.delete(`${API_URL}business/${businessId}`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error deleting business:', error);
    throw error;
  }
};

// ------------------ Career API ------------------

// Create new career
export const createCareer = async (data) => {
  try {
    const response = await axios.post(`${API_URL}career`, data, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error creating career:', error);
    throw error;
  }
};

// Get all careers
export const getCareers = async () => {
  try {
    const response = await axios.get(`${API_URL}career`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error fetching careers:', error);
    throw error;
  }
};

// Update career
export const updateCareer = async (careerId, data) => {
  try {
    const response = await axios.put(`${API_URL}career/${careerId}`, data, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error updating career:', error);
    throw error;
  }
};

// Delete career
export const deleteCareer = async (careerId) => {
  try {
    const response = await axios.delete(`${API_URL}career/${careerId}`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error deleting career:', error);
    throw error;
  }
};

// ------------------ Feedback API ------------------
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(`${API_URL}feedback`, feedbackData);
    return response.data; // Returns the success message and feedback details
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error; // Throw error for further handling in the component
  }
};

// Function to get all feedback (admin only)
export const getAllFeedback = async () => {
  try {
    const response = await axios.get(`${API_URL}feedback`);
    return response.data; // Returns an array of feedbacks
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error; // Throw error for further handling in the component
  }
};

// ------------------ Suggestion API ------------------

// Submit suggestion
export const submitSuggestion = async (data) => {
  try {
    const response = await axios.post(`${API_URL}suggestion`, data, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error submitting suggestion:', error);
    throw error;
  }
};

// Get all suggestions (admin only)
export const getAllSuggestions = async () => {
  try {
    const response = await axios.get(`${API_URL}suggestion`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw error;
  }
};

// Delete suggestion
export const deleteSuggestion = async (suggestionId) => {
  try {
    const response = await axios.delete(`${API_URL}suggestion/${suggestionId}`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error deleting suggestion:', error);
    throw error;
  }
};

// ------------------ QR Code API ------------------

// Create QR code
export const createQRCode = async (data) => {
  try {
    const response = await axios.post(`${API_URL}qrcode`, data, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error creating QR code:', error);
    throw error;
  }
};

// Get all QR codes
export const getQRCodes = async () => {
  try {
    const response = await axios.get(`${API_URL}qrcode`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error fetching QR codes:', error);
    throw error;
  }
};

// Delete QR code
export const deleteQRCode = async (qrCodeId) => {
  try {
    const response = await axios.delete(`${API_URL}qrcode/${qrCodeId}`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error deleting QR code:', error);
    throw error;
  }
};

// ------------------ User API ------------------

// Register new user (admin or cleaner)
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}register`, data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}login`, data);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_URL}logout`, {}, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
};



export const createCareerPathway = async (pathwayData) => {
  try {
    const response = await axios.post(`${API_URL}/career-pathways`, pathwayData);
    return response.data;
  } catch (error) {
    console.error('Error creating CareerPathway:', error.response?.data || error.message);
    throw error;
  }
};

// Get all CareerPathways
export const getCareerPathways = async (setCareerPathways) => {
  try {
    const response = await axios.get(`${API_URL}/career-pathways`);
    // Ensure the state setter function is used properly
    setCareerPathways(response.data.data || []);  // Update state in the component
    return response.data;  // Optionally return the data if needed elsewhere
  } catch (error) {
    console.error('Error fetching CareerPathways:', error.response?.data || error.message);
    throw error;  // Propagate the error if needed
  }
};
// Get a single CareerPathway by ID
export const getCareerPathwayById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/career-pathways/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching CareerPathway by ID:', error.response?.data || error.message);
    throw error;
  }
};

// Update a CareerPathway
export const updateCareerPathway = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/career-pathways/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating CareerPathway:', error.response?.data || error.message);
    throw error;
  }
};

// Delete a CareerPathway
export const deleteCareerPathway = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/career-pathways/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting CareerPathway:', error.response?.data || error.message);
    throw error;
  }
};