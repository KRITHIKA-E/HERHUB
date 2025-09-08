import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#8b1e8b', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
      <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
        HER HUB
      </Link>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
        <Link to="/login" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Login</Link>
        <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Signup</Link>
      </div>
    </nav>
  );
};

export default NavBar;
