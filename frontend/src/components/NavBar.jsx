import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // check login state

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // clear state
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-gradient">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          HER HUB
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {/* Resources */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </span>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li>
                  <Link className="dropdown-item" to="/resources/articles">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/resources/courses">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/resources/guides">
                    Guides
                  </Link>
                </li>
              </ul>
            </li>

            {/* Community */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="communityDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Community
              </span>
              <ul className="dropdown-menu" aria-labelledby="communityDropdown">
                <li>
                  <Link className="dropdown-item" to="/community/forum">
                    Forum
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/community/mentorship">
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/community/success">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </li>

            {/* Jobs */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="jobsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Jobs
              </span>
              <ul className="dropdown-menu" aria-labelledby="jobsDropdown">
                <li>
                  <Link className="dropdown-item" to="/jobs/browse">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/jobs/post">
                    Post Jobs
                  </Link>
                </li>
              </ul>
            </li>

            {/* Post Job Button */}
            <li className="nav-item">
              <Link to="/jobs/post" className="btn post-job-btn ms-lg-3">
                Post a Job
              </Link>
            </li>

            {/* Profile (only if logged in) */}
            {isLoggedIn && (
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  👤
                </span>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
