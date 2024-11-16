import React, { useState } from "react";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import '../styles/LoginPage.css';  // Since CSS is inside /styles



function LoginPage() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="background">
      <div className="login-container">
        <h2>Alumni Connect</h2>
        <p className="subtext">Connecting students and alumni seamlessly</p>
        <div className="tabs">
          <div
            className={`tab ${activeTab === "student" ? "active" : ""}`}
            onClick={() => setActiveTab("student")}
          >
            <FaUserGraduate className="icon" />
            Student Login
          </div>
          <div
            className={`tab ${activeTab === "alumni" ? "active" : ""}`}
            onClick={() => setActiveTab("alumni")}
          >
            <FaUserTie className="icon" />
            Alumni Login
          </div>
        </div>

        {activeTab === "student" ? <StudentLoginForm /> : <AlumniLoginForm />}
      </div>
    </div>
  );
}

function StudentLoginForm() {
  return (
    <form className="login-form">
      <input type="text" placeholder="Student ID" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login as Student</button>
    </form>
  );
}

function AlumniLoginForm() {
  return (
    <form className="login-form">
      <input type="text" placeholder="Alumni ID" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login as Alumni</button>
    </form>
  );
}

export default LoginPage;
