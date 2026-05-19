import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const features = [
  {
    title: "Passion-to-Profession",
    desc: "AI maps your interests to real career paths and guides you step-by-step.",
    icon: "💡",
  },
  {
    title: "Resource Hub",
    desc: "Access articles, courses, and expert guides to upskill and shine.",
    icon: "📚",
  },
  {
    title: "Verified Profiles",
    desc: "Build trust with KYC, badges, and AI-powered safety for all users.",
    icon: "✅",
  },
  {
    title: "Community & Mentorship",
    desc: "Connect, share, and grow with forums, success stories, and mentors.",
    icon: "🤝",
  },
];

const Entrance = () => {
  const navigate = useNavigate();
  return (
    <div className="entrance-bg">
      {/* Navigation Bar with only logo */}
      <nav className="entrance-navbar">
        {/* No brand text here */}
      </nav>

      {/* Hero Section */}
      <section className="hero-section fade-in">
        <div className="hero-left">
          <img src="/images/logo.jpg" alt="HER HUB Logo" className="hero-logo" />
        </div>
        <div className="hero-right">
          <h1 className="hero-title">Empowering Womens to Transform Passions into Professions</h1>
          <p className="hero-tagline">
            HER HUB transforms your passion into a profession. Discover personalized career paths, connect with professionals, and join a trusted, supportive community.
          </p>
          <button className="enter-btn ripple" onClick={() => navigate('/home')}>
            Enter HER HUB
          </button>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <button className="enter-btn ripple" onClick={() => navigate('/login')}>
              Login as Homemaker
            </button>
            <button className="enter-btn ripple" onClick={() => navigate('/hirer/login')}>
              Login as Hirer
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Why HER HUB?</h2>
        <div className="features-list">
          {features.map((f, idx) => (
            <div className="feature-card" key={idx}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="entrance-footer">
        &copy; {new Date().getFullYear()} HER HUB. All rights reserved. | <a href="mailto:contact@herhub.com">Contact Us</a>
      </footer>
    </div>
  );
};

export default Entrance;
