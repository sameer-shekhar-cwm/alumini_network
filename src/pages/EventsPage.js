import React from 'react';
import '../styles/EventsPage.css';

const events = [
  {
    title: "Alumni Networking Event",
    date: "March 25, 2024",
    location: "Virtual",
  },
  {
    title: "Career Guidance Session",
    date: "April 10, 2024",
    location: "New York",
  },
  {
    title: "Annual Alumni Meetup",
    date: "May 15, 2024",
    location: "San Francisco",
  },
  {
    title: "Webinar: Alumni Success Stories",
    date: "June 5, 2024",
    location: "Virtual",
  },
  // Add more events as needed
];

function EventsPage() {
  const handleRegister = (eventTitle) => {
    // You can add the registration logic here
    alert(`Registering for the event: ${eventTitle}`);
  };

  return (
    <div className="events-page">
      <h1 className="page-title">Upcoming Events</h1>
      <p className="page-description">
        Join us for exciting events designed to connect, inspire, and empower our alumni community. Check out the upcoming events and register today!
      </p>

      <div className="event-cards-container">
        {events.map((event, index) => (
          <div key={index} className="upcoming-event-card">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <button
              className="register-btn"
              onClick={() => handleRegister(event.title)}
            >
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;