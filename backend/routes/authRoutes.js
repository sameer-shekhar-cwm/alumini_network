const express = require('express');
const router = express.Router();

// Sample route for authentication
router.get('/login', (req, res) => {
  res.send('Login route');
});

module.exports = router;
