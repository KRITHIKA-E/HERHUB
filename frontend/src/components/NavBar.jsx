import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/logo.jpg';

const NavBar = () => {
  return (
    <nav>
      <Link to="/"><img src={logo} alt="HER HUB Logo" /></Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default NavBar;
