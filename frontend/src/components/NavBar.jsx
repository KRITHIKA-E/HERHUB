import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  const isHirerLoggedIn = Boolean(localStorage.getItem("hirerLoggedIn"));
  const isLoggedIn = isUserLoggedIn || isHirerLoggedIn;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("hirerLoggedIn");
    localStorage.removeItem("hirerToken");
    localStorage.removeItem("hirer");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <nav className="navbar">

  <div className="navbar-logo">
    HER HUB
  </div>

  <ul className="navbar-links">

    <li>Home</li>
    <li>Features</li>
    <li>Community</li>
    <li>Resources</li>

  </ul>

</nav>
  );
};

export default NavBar;
