import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('username') || JSON.parse(localStorage.getItem('user'))?.name;
    if(!user) navigate('/login');
    else setUsername(user);
  }, [navigate]);

  return (
    <div className="container">
      <h2>Welcome, {username}!</h2>
      <p>"Empower yourself and shine in your passion!"</p>
    </div>
  );
};

export default Home;
