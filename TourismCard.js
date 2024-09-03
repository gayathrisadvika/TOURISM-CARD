// src/TourismCard.js
import React from 'react';
import './TourismCard.css'; // Import the CSS file for styling

const TourismCard = () => {
  const handleBooking = () => {
    alert('Booking feature coming soon!');
  };

  return (
    <div className="tourism-card">
      <img
        src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
        alt="Beautiful Tourist Destination"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">Explore the Beauty of Bali</h2>
        <p className="card-description">
          Discover stunning beaches, vibrant culture, and serene landscapes in Bali. Perfect for your next getaway!
        </p>
        <button className="card-button" onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourismCard;
