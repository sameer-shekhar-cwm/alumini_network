// routes/chatRoutes.js
const express = require('express');
const Message = require('../models/Message');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get messages for a room
router.get('/:roomId', authMiddleware, async (req, res) => {
  try {
    const messages = await Message.find({ roomId: req.params.roomId }).populate('sender', 'name');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving messages' });
  }
});

// Send a new message (saving to database)
router.post('/:roomId', authMiddleware, async (req, res) => {
  const { content } = req.body;
  const newMessage = new Message({
    sender: req.user.id,
    content,
    roomId: req.params.roomId
  });

  try {
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
});

module.exports = router;
