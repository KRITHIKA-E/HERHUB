import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-content">
          <h1>Welcome to HER HUB</h1>
          <p>Empowering homemakers to explore their passions and earn from home.</p>
          <div className="hero-buttons">
            <Link to="/signup"><Button>Get Started</Button></Link>
            <Link to="/login"><Button>Login</Button></Link>
          </div>
        </div>
      </section>
      <section className="features container">
        <div className="card">
          <h3>Discover Jobs</h3>
          <p>Find opportunities tailored to your skills and passion.</p>
        </div>
        <div className="card">
          <h3>Learn & Grow</h3>
          <p>Access tutorials and resources to upgrade your skills.</p>
        </div>
        <div className="card">
          <h3>Connect</h3>
          <p>Collaborate with professionals and get hired remotely.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
