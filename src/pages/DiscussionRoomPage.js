import React from 'react';
import '../styles/DiscussionRoomPage.css';

function DiscussionRoomPage() {
  return (
    <div className="discussion-room-page">
      <h1 className="page-title">Discussion Room</h1>
      <div className="discussion">
        <div className="message">
          <p><strong>John Doe:</strong> Hello everyone! How can I assist you today?</p>
        </div>
        <div className="message">
          <p><strong>Jane Smith:</strong> I need advice on career progression in product management.</p>
        </div>
        {/* Add more messages */}
      </div>
      <textarea placeholder="Type your message..." rows="4" className="message-input"></textarea>
    </div>
  );
}

export default DiscussionRoomPage;
