import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Entrance = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/login'); // navigate to login page
  };

  return (
    <div className="center-box">
      <img src="/logo.jpg" alt="HER HUB Logo" style={{ width: '120px', marginBottom: '1rem' }} />
      <h1 style={{ color: '#8b1e8b', marginBottom: '0.5rem' }}>HER HUB</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#4b2c4b' }}>
        "She is not the fate, she is born to be great!!"
      </p>
      <Button onClick={handleEnter}>Enter</Button>
    </div>
  );
};

export default Entrance;
