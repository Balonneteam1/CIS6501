const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new user (admin or cleaner)
exports.registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, role });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const payload = { user: { id: user.id, role: user.role } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.error('JWT sign error:', err);
        return res.status(500).json({ msg: 'Server error' });
      }

      // Set token in cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure :false,
        maxAge: 3600000,
      });
      console.log(token);
      res.json({ msg: 'User logged in successfully' });
    });
  }  catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.logoutUser = (req, res) => {
  try {
    // Clear the JWT token from the cookies
    res.clearCookie('token', { httpOnly: true });

    return res.status(200).json({ message: 'User logged out successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};
