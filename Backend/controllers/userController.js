const Business = require('../models/Business');
const Career = require('../models/Career');
const Feedback = require('../models/Feedback');
const Suggestion = require('../models/Suggestion');
const QRCode = require('../models/QRCode');
const Analytics = require('../models/Analytics');
const CareerPathway = require('../models/CareerPathway');




// Create a new CareerPathway
exports.createCareerPathway = async (req, res) => {
  try {
    const { title, description, business, steps } = req.body;

    // Check if the business exists
    const businessExists = await Business.findById(business);
    if (!businessExists) {
      return res.status(404).json({ message: 'Business not found' });
    }

    const newCareerPathway = new CareerPathway({
      title,
      description,
      business,
      steps,
    });

    // Save the new CareerPathway to the database
    await newCareerPathway.save();

    return res.status(201).json({
      message: 'Career Pathway created successfully',
      data: newCareerPathway,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all CareerPathways
exports.getCareerPathways = async (req, res) => {
  try {
    const careerPathways = await CareerPathway.find().populate('business', 'name location'); // Populating business info

    return res.status(200).json({
      message: 'Career Pathways fetched successfully',
      data: careerPathways,
      
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get a single CareerPathway by ID
exports.getCareerPathwayById = async (req, res) => {
  try {
    const { id } = req.params;
    const careerPathway = await CareerPathway.findById(id).populate('business', 'name location');

    if (!careerPathway) {
      return res.status(404).json({ message: 'Career Pathway not found' });
    }

    return res.status(200).json({
      message: 'Career Pathway fetched successfully',
      data: careerPathway,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Update a CareerPathway
exports.updateCareerPathway = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, business, steps } = req.body;

    // Check if the business exists
    const businessExists = await Business.findById(business);
    if (!businessExists) {
      return res.status(404).json({ message: 'Business not found' });
    }

    const updatedCareerPathway = await CareerPathway.findByIdAndUpdate(
      id,
      { title, description, business, steps, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedCareerPathway) {
      return res.status(404).json({ message: 'Career Pathway not found' });
    }

    return res.status(200).json({
      message: 'Career Pathway updated successfully',
      data: updatedCareerPathway,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Delete a CareerPathway
exports.deleteCareerPathway = async (req, res) => {
  try {
    const { id } = req.params;

    const careerPathway = await CareerPathway.findByIdAndDelete(id);

    if (!careerPathway) {
      return res.status(404).json({ message: 'Career Pathway not found' });
    }

    return res.status(200).json({
      message: 'Career Pathway deleted successfully',
      data: careerPathway,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// ------------------ Business Controller ------------------

// Create new business
exports.createBusiness = async (req, res) => {
  const { name, industry, location, contactInfo, description, careerPathways, qrCodeLink } = req.body;
  try {
    const newBusiness = new Business({ name, industry, location, contactInfo, description, careerPathways, qrCodeLink });
    await newBusiness.save();
    return res.status(201).json(newBusiness);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all businesses
exports.getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find().populate('careerPathways');
    return res.json(businesses);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Update business
exports.updateBusiness = async (req, res) => {
  const { businessId } = req.params;
  const { name, industry, location, contactInfo, description, careerPathways, qrCodeLink } = req.body;
  try {
    const business = await Business.findByIdAndUpdate(
      businessId, 
      { name, industry, location, contactInfo, description, careerPathways, qrCodeLink },
      { new: true }
    );
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    return res.json(business);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Delete business
exports.deleteBusiness = async (req, res) => {
  const { businessId } = req.params;
  try {
    const business = await Business.findByIdAndDelete(businessId);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    return res.json({ message: 'Business deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// ------------------ Career Controller ------------------

// Create new career
exports.createCareer = async (req, res) => {
  const { title, description, potentialEmployers, relatedCareers } = req.body;
  try {
    const newCareer = new Career({ title, description, potentialEmployers, relatedCareers });
    await newCareer.save();
    return res.status(201).json(newCareer);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all careers
exports.getCareers = async (req, res) => {
  try {
    const careers = await Career.find().populate('potentialEmployers').populate('relatedCareers');
    return res.json(careers);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Update career
exports.updateCareer = async (req, res) => {
  const { careerId } = req.params;
  const { title, description, potentialEmployers, relatedCareers } = req.body;
  try {
    const career = await Career.findByIdAndUpdate(
      careerId, 
      { title, description, potentialEmployers, relatedCareers },
      { new: true }
    );
    if (!career) {
      return res.status(404).json({ message: 'Career not found' });
    }
    return res.json(career);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Delete career
exports.deleteCareer = async (req, res) => {
  const { careerId } = req.params;
  try {
    const career = await Career.findByIdAndDelete(careerId);
    if (!career) {
      return res.status(404).json({ message: 'Career not found' });
    }
    return res.json({ message: 'Career deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// ------------------ Feedback Controller ------------------
exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new feedback entry
    const feedback = new Feedback({ name, email, message });
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully', feedback });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
};

// Retrieve all feedback (for admin review)
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 }); // Latest feedback first
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback', error: error.message });
  }
};

// module.exports = { submitFeedback, getAllFeedback };

// ------------------ Suggestions Controller ------------------

// Submit suggestion
exports.submitSuggestion = async (req, res) => {
  const { content } = req.body;
  try {
    const suggestion = new Suggestion({ user: req.user._id, content });
    await suggestion.save();
    return res.status(201).json({ message: 'Suggestion submitted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Get all suggestions (for admin)
exports.getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find().populate('user');
    return res.json(suggestions);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Delete suggestion
exports.deleteSuggestion = async (req, res) => {
  const { suggestionId } = req.params;
  try {
    const suggestion = await Suggestion.findByIdAndDelete(suggestionId);
    if (!suggestion) {
      return res.status(404).json({ message: 'Suggestion not found' });
    }
    return res.json({ message: 'Suggestion deleted successfully' });
  } catch (err)    {
    return res.status(500).json({ message: 'Server error' });
  }
};

// ------------------ QR Code Controller ------------------

// // Create QR code
// exports.createQRCode = async (req, res) => {
//   const { businessId, qrCodeUrl } = req.body;
//   try {
//     const qrCode = new QRCode({ businessId, qrCodeUrl });
//     await qrCode.save();
//     return res.status(201).json(qrCode);
//   } catch (err) {
//     return res.status(500).json({ message: 'Server error' });
//   }
// };

// Create QR code
exports.createQRCode = async (req, res) => {
  const { businessId, url } = req.body;  // Extract businessId and url from the request body
  
  try {
    // Ensure the businessId and url are provided
    if (!businessId || !url) {
      return res.status(400).json({ message: 'Business ID and URL are required.' });
    }

    // Create a new QRCode document
    const newQRCode = new QRCode({ businessId, qrCodeUrl: url });

    // Save the new QR code to the database
    await newQRCode.save();

    // Respond with the created QR code
    res.status(201).json(newQRCode);
  } catch (err) {
    console.error('Error creating QR code:', err);
    res.status(500).json({ message: 'Server error', error: err.message || err });
  }
};
// Get all QR codes
exports.getQRCodes = async (req, res) => {
  try {
    const qrCodes = await QRCode.find().populate('businessId');
    return res.json(qrCodes);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Delete QR code
exports.deleteQRCode = async (req, res) => {
  const { qrCodeId } = req.params;
  try {
    const qrCode = await QRCode.findByIdAndDelete(qrCodeId);
    if (!qrCode) {
      return res.status(404).json({ message: 'QR Code not found' });
    }
    return res.json({ message: 'QR Code deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// ------------------ Analytics Controller ------------------

// Get analytics data
exports.getAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.find();
    return res.json(analytics);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// Update analytics (e.g., page views, scans)
exports.updateAnalytics = async (req, res) => {
  const { page } = req.params;
  const { views, scans } = req.body;
  try {
    let analytics = await Analytics.findOne({ page });
    if (analytics) {
      analytics.views += views;
      analytics.scans += scans;
      analytics = await analytics.save();
    } else {
      analytics = new Analytics({ page, views, scans });
      await analytics.save();
    }
    return res.json(analytics);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};
