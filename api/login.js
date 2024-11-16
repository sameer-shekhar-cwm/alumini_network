const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Import the User model
const router = express.Router(); // Create a router instance

// POST route for login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Step 1: Ensure email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Step 2: Find user by email in the database
    const user = await User.findOne({ email });

    // Step 3: If user is not found, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Step 4: Compare the submitted password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // Step 5: If passwords do not match, return error
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Step 6: If the credentials are valid, return success response
    res.status(200).json({ message: 'Login successful' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
