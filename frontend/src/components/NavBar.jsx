import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Small Logo + Text */}
        <Link to="/" className="nav-logo">
          <span className="logo-text">HER HUB</span>
        </Link>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <span>Resources ▾</span>
            {resourcesOpen && (
              <ul className="dropdown">
                <li><Link to="/resources/articles">Articles</Link></li>
                <li><Link to="/resources/courses">Courses</Link></li>
                <li><Link to="/resources/guides">Guides</Link></li>
              </ul>
            )}
          </li>

          <li
            onMouseEnter={() => setCommunityOpen(true)}
            onMouseLeave={() => setCommunityOpen(false)}
          >
            <span>Community ▾</span>
            {communityOpen && (
              <ul className="dropdown">
                <li><Link to="/community/forum">Forum</Link></li>
                <li><Link to="/community/mentorship">Mentorship</Link></li>
                <li><Link to="/community/success">Success Stories</Link></li>
              </ul>
            )}
          </li>

          <li
            onMouseEnter={() => setJobsOpen(true)}
            onMouseLeave={() => setJobsOpen(false)}
          >
            <span>Jobs ▾</span>
            {jobsOpen && (
              <ul className="dropdown">
                <li><Link to="/jobs/browse">Browse Jobs</Link></li>
                <li><Link to="/jobs/post">Post Jobs</Link></li>
              </ul>
            )}
          </li>

          {/* Post a Job Button */}
          <li>
            <Link to="/jobs/post" className="post-job-btn">Post a Job</Link>
          </li>

          {/* Profile */}
          <li className="profile-menu">
            <span onClick={() => setProfileOpen(!profileOpen)}>👤 ▾</span>
            {profileOpen && (
              <ul className="dropdown profile-dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
