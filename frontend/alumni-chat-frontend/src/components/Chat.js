import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

// Connect to the backend socket server
const socket = io('http://localhost:5000');

const Chat = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Join the room
    socket.emit('joinRoom', roomId);

    // Fetch chat history from backend
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/chat/${roomId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();

    // Listen for new messages from the backend
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, [roomId]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = { roomId, content: newMessage };
      // Emit the message to the socket server
      socket.emit('message', message);

      // Send the message to the backend for saving in the database
      axios.post(`http://localhost:5000/api/chat/${roomId}`, { content: newMessage })
        .then((response) => {
          setMessages((prevMessages) => [...prevMessages, response.data]);
          setNewMessage('');
        })
        .catch((error) => console.error('Error sending message:', error));
    }
  };

  return (
    <div>
      <h2>Chat Room {roomId}</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender?.name || 'Anonymous'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
