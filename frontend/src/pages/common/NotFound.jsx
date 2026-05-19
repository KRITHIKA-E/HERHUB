import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="home-bg fade-in">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>Page Not Found</h1>
          <p>It looks like the page you are looking for does not exist.</p>
          <button className="cta-btn ripple" onClick={() => navigate("/")}>Return Home</button>
        </div>
        <div className="home-hero-image">
          <img src="/images/logo.jpg" alt="Not Found" />
        </div>
      </section>
    </div>
  );
};

export default NotFound;
