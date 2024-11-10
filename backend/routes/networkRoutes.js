// routes/networkRoutes.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Get all alumni profiles
router.get('/all', async (req, res) => {
  try {
    const alumni = await User.find().select('-password');
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Search alumni by name, department, or job title
router.get('/search', async (req, res) => {
  const { name, department, jobTitle } = req.query;
  const query = {};

  if (name) query.name = { $regex: name, $options: 'i' };
  if (department) query.department = { $regex: department, $options: 'i' };
  if (jobTitle) query.jobTitle = { $regex: jobTitle, $options: 'i' };

  try {
    const alumni = await User.find(query).select('-password');
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
