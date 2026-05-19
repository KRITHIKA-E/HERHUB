import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const RoleSelection = () => {
  return (
    <div className="entrance-bg">
      <section className="hero-section fade-in" style={{ flexDirection: "column", gap: "1.5rem" }}>
        <h1 className="hero-title">Choose Your Role</h1>
        <p className="hero-tagline">
          Select a role to continue with the right HER HUB experience for homemakers, trainers, or hirers.
        </p>
      </section>

      <section className="features-section">
        <h2 className="features-title">Find your place at HER HUB</h2>
        <div className="features-list">
          <div className="feature-card">
            <span className="feature-icon">🏡</span>
            <h3>Homemaker</h3>
            <p>Discover jobs, connect with communities, and grow your skills with tailored support.</p>
            <Link to="/homemaker/login" className="quick-link-btn">
              Start as Homemaker
            </Link>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🎓</span>
            <h3>Trainer</h3>
            <p>Share your expertise, grow your training network, and support homemakers with trusted courses.</p>
            <Link to="/trainer/login" className="quick-link-btn">
              Start as Trainer
            </Link>
          </div>

          <div className="feature-card">
            <span className="feature-icon">💼</span>
            <h3>Hirer</h3>
            <p>Post jobs, review applications, and find the right homemaker talent for your team.</p>
            <Link to="/hirer/login" className="quick-link-btn">
              Start as Hirer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoleSelection;
