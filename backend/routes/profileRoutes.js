// routes/profileRoutes.js
const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware to protect routes
const router = express.Router();

// Get user profile
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/me', authMiddleware, async (req, res) => {
  const { graduationYear, department, jobTitle, location } = req.body;
  const updates = { graduationYear, department, jobTitle, location };

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true }
    ).select('-password');
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
