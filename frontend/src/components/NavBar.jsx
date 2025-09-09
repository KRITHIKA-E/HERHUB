import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#8b1e8b',
        padding: '10px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        boxShadow: '0 2px 8px rgba(120, 60, 160, 0.10)',
        borderBottom: '2px solid #a45fc1',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'white',
            letterSpacing: '1px',
            marginRight: '32px',
          }}
        >
          HER HUB
        </Link>
        <Link to="/resources" style={{ color: 'white', marginRight: '18px', textDecoration: 'none', fontWeight: 500 }}>
          Resources
        </Link>
        <Link to="/community" style={{ color: 'white', marginRight: '18px', textDecoration: 'none', fontWeight: 500 }}>
          Community
        </Link>
        <Link to="/jobs" style={{ color: 'white', marginRight: '18px', textDecoration: 'none', fontWeight: 500 }}>
          Jobs
        </Link>
        <Link
          to="/post-job"
          style={{
            color: '#8b1e8b',
            background: '#fff',
            borderRadius: '6px',
            padding: '6px 16px',
            fontWeight: 600,
            textDecoration: 'none',
            marginLeft: '10px',
            boxShadow: '0 2px 8px rgba(120, 60, 160, 0.08)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          Post a Job
        </Link>
      </div>
      <div>
        {/* Profile icon placeholder */}
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <span
            style={{
              display: 'inline-block',
              width: '34px',
              height: '34px',
              background: '#fff',
              borderRadius: '50%',
              textAlign: 'center',
              lineHeight: '34px',
              color: '#8b1e8b',
              fontWeight: 'bold',
              fontSize: '18px',
              boxShadow: '0 2px 8px rgba(120, 60, 160, 0.10)',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            title="Profile"
          >
            <span role="img" aria-label="profile">
              👤
            </span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
