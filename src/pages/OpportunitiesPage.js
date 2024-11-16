import React from 'react';
import '../styles/OpportunitiesPage.css'; // Make sure to import the CSS

const opportunities = [
  {
    id: 1,
    title: "Software Engineering Intern",
    description: "Join our team as a software engineering intern to work on cutting-edge technologies.",
    applyLink: "/apply/1"
  },
  {
    id: 2,
    title: "Data Science Intern",
    description: "Work with data scientists to analyze large datasets and extract valuable insights.",
    applyLink: "/apply/2"
  },
  {
    id: 3,
    title: "Marketing Intern",
    description: "Help develop marketing strategies and campaigns for our growing platform.",
    applyLink: "/apply/3"
  },
  // Add more opportunities as needed
];

function OpportunitiesPage() {
  return (
    <div className="opportunities-page">
      <h1 className="page-title">Available Internship Opportunities</h1>

      <div className="opportunity-list">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="opportunity-card">
            <h3 className="card-title">{opportunity.title}</h3>
            <p className="card-description">{opportunity.description}</p>
            <a href={opportunity.applyLink} className="apply-btn">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpportunitiesPage;