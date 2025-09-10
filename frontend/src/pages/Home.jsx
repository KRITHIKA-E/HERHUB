import React from 'react';
import { useNavigate, Link } from 'react-router-dom';  // <-- Add this line

const quickLinks = [
  { title: "Homemakers", desc: "Explore passion-to-profession paths", link: "/homemakers" },
  { title: "Professionals", desc: "Hire verified talents", link: "/professionals" },
  { title: "Resources", desc: "Articles, courses, and guides", link: "/resources" },
  { title: "Community", desc: "Forums and mentorships", link: "/community" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-bg">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>Welcome to HER HUB</h1>
          <p>Your journey from passion to profession starts here.</p>
          <button className="cta-btn" onClick={() => navigate('/signup')}>Get Started</button>
        </div>
        <div className="home-hero-image">
          <img src="/images/logo.jpg" alt="HER HUB Banner" />
        </div>
      </section>

      <section className="home-quick-links">
        {quickLinks.map((link, idx) => (
          <div className="quick-card" key={idx}>
            <h3>{link.title}</h3>
            <p>{link.desc}</p>
            <Link to={link.link} className="quick-link-btn">Explore</Link>
          </div>
        ))}
      </section>

      <footer className="home-footer">
        &copy; {new Date().getFullYear()} HER HUB. All rights reserved. | <a href="mailto:contact@herhub.com">Contact Us</a>
      </footer>
    </div>
  );
};

export default Home;
