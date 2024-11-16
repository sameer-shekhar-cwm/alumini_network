import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '/Users/tanishasirohi/Desktop/webProj/aluminiconnect/src/comonents/Sidebar.js';  // Corrected import path for Sidebar
import LoginPage from './pages/LoginPage';
import AlumniInfoPage from '/Users/tanishasirohi/Desktop/webProj/aluminiconnect/src/pages/AluminiInfoPage.js';  // Corrected spelling for AlumniInfoPage
import OpportunitiesPage from './pages/OpportunitiesPage';
import DiscussionRoomPage from './pages/DiscussionRoomPage';
import EventsPage from './pages/EventsPage';  // Import EventsPage

function App() {
  return (
    <Router>
      <div className="background">  {/* Apply the background to this div */}
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/alumni-info" element={<AlumniInfoPage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/discussion-room" element={<DiscussionRoomPage />} />
            <Route path="/events" element={<EventsPage />} />  {/* Added route for EventsPage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;