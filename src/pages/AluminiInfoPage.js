import React from 'react';
import '../styles/AlumniInfoPage.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function AlumniInfoPage() {
  return (
    <div className="alumni-info-page">
      <h1 className="page-title">Meet Our Alumni</h1>
      <div className="card-container">
        <AlumniCard
          name="John Doe"
          position="Software Engineer at ABC Corp."
          email="johndoe@example.com"
          image="https://via.placeholder.com/150"
          linkedin="https://www.linkedin.com/in/johndoe"
          twitter="https://twitter.com/johndoe"
          github="https://github.com/johndoe"
        />
        <AlumniCard
          name="Jane Smith"
          position="Product Manager at XYZ Inc."
          email="janesmith@example.com"
          image="https://via.placeholder.com/150" 
          linkedin="https://www.linkedin.com/in/janesmith"
          twitter="https://twitter.com/janesmith"
          github="https://github.com/janesmith"
        />
        <AlumniCard
          name="Emily Johnson"
          position="Data Scientist at DataTech Solutions"
          email="emilyjohnson@example.com"
          image="https://via.placeholder.com/150" 
          linkedin="https://www.linkedin.com/in/emilyjohnson"
          twitter="https://twitter.com/emilyjohnson"
          github="https://github.com/emilyjohnson"
        />
        <AlumniCard
          name="Michael Brown"
          position="UX Designer at Creative Labs"
          email="michaelbrown@example.com"
          image="https://via.placeholder.com/150" 
          linkedin="https://www.linkedin.com/in/michaelbrown"
          twitter="https://twitter.com/michaelbrown"
          github="https://github.com/michaelbrown"
        />
      </div>
    </div>
  );
}

function AlumniCard({ name, position, email, image, linkedin, twitter, github }) {
  return (
    <div className="alumni-card">
      <img src={image} alt={name} className="profile-image" />
      <h3>{name}</h3>
      <p className="position">{position}</p>
      <p className="email">Email: {email}</p>
      <div className="social-icons">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default AlumniInfoPage;