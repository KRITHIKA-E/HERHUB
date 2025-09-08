import React from 'react';
import { useNavigate } from 'react-router-dom';

const Entrance = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
     <img src="/images/logo.jpg" alt="HER HUB" className="logo-img" />

      <h1>HER HUB</h1>
      <p className="slogan">"She is not the fate, she is born to be great!!"</p>
      <button onClick={() => navigate('/login')}>Enter</button>
    </div>
  );
};

export default Entrance;
