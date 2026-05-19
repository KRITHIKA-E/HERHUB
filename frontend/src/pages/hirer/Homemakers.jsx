import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

const Homemakers = () => {
  const navigate = useNavigate();

  return (
    <div className="home-bg fade-in">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>For Homemakers</h1>
          <p>Discover how HER HUB helps you turn your passion into sustainable work.</p>
          <button className="cta-btn ripple" onClick={() => navigate("/homemaker/signup")}>Join Now</button>
        </div>
        <div className="home-hero-image">
          <img src="/images/logo.jpg" alt="Homemakers" />
        </div>
      </section>

      <section className="home-quick-links">
        <div className="quick-card">
          <h3>Career Ideas</h3>
          <p>Explore passion-based careers and skill-building paths.</p>
        </div>
        <div className="quick-card">
          <h3>Job Listings</h3>
          <p>Find meaningful job opportunities posted by trusted companies.</p>
        </div>
        <div className="quick-card">
          <h3>Community</h3>
          <p>Connect with mentors and homemakers growing their careers.</p>
        </div>
      </section>
    </div>
  );
};

export default Homemakers;
