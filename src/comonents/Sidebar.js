import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaUserTie, FaInfoCircle, FaSignInAlt, FaCalendarAlt } from 'react-icons/fa';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2 className="organization-name">Alumni Association</h2>
      </div> 
      <ul className="nav-links">
        <li>
          <Link to="/login" className="nav-link">
            <FaSignInAlt className="icon" /> Login
          </Link>
        </li>
        <li>
          <Link to="/events" className="nav-link">
            <FaCalendarAlt className="icon" /> Events
          </Link>
        </li>
        <li>
          <Link to="/alumni-info" className="nav-link">
            <FaUserGraduate className="icon" /> Alumni Info
          </Link>
        </li>
        <li>
          <Link to="/discussion-room" className="nav-link">
            <FaUserTie className="icon" /> Discussion Room
          </Link>
        </li>
        <li>
          <Link to="/opportunities" className="nav-link">
            <FaInfoCircle className="icon" /> Internships
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;