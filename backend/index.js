// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');  // For creating an HTTP server
const { Server } = require('socket.io'); // Importing Socket.io server
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const networkRoutes = require('./routes/networkRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const chatRoutes = require('./routes/chatRoutes');

app.use('/api/chat', chatRoutes);

// Create HTTP server to integrate with Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allows all origins (or specify a specific URL)
    methods: ['GET', 'POST']
  }
});

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/network', networkRoutes);

app.get('/', (req, res) => res.send('Server is running!'));

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle joining a chat room
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });

  // Handle sending a message
  socket.on('message', ({ roomId, message }) => {
    io.to(roomId).emit('message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
