import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="home-bg fade-in">
      {/* Header Section */}
      <header className="home-hero">
        <div className="home-hero-text">
          <h1 className="hero-title">Welcome, {user?.name} 🎉</h1>
          <p className="hero-subtitle">
            Empower your journey — Explore passions, gain skills, and unlock opportunities at <b>HER HUB</b>.
          </p>
          <button className="cta-btn ripple" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="home-hero-image">
          <img src="/images/dashboard.png" alt="HER HUB Dashboard" />
        </div>
      </header>

      {/* Quick Links */}
      <section className="home-quick-links">
        <div className="quick-card">
          <h3>🌸 Explore Passions</h3>
          <p>Discover personalized career paths based on your interests.</p>
          <button className="quick-link-btn" onClick={() => navigate("/passions")}>
            Explore
          </button>
        </div>
        <div className="quick-card">
          <h3>📚 Learning Resources</h3>
          <p>Get curated courses, articles, and guides to upskill yourself.</p>
          <button className="quick-link-btn" onClick={() => navigate("/resources")}>
            Resources
          </button>
        </div>
        <div className="quick-card">
          <h3>🤝 Community</h3>
          <p>Connect with mentors, share experiences, and grow together.</p>
          <button className="quick-link-btn" onClick={() => navigate("/community")}>
            Community
          </button>
        </div>
        <div className="quick-card">
          <h3>💼 Jobs & Gigs</h3>
          <p>Browse or post opportunities tailored for homemakers.</p>
          <button className="quick-link-btn" onClick={() => navigate("/jobs")}>
            Jobs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
