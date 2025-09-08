import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', background: '#ff69b4', color: 'white' }}>
      <Link to="/" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '15px', color: 'white' }}>Login</Link>
      <Link to="/signup" style={{ color: 'white' }}>Signup</Link>
    </nav>
  );
};

export default NavBar;
