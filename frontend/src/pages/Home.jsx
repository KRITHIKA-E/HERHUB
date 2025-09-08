import React, { useEffect, useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (!user) window.location.href = "/login";
    else setUsername(user);
  }, []);

  return (
    <div className="page-container">
      <div className="container">
        <img
          src="/logo.jpg"
          alt="HER HUB Logo"
          style={{ width: '120px', marginBottom: '1rem' }}
        />
        <h2>Welcome, {username}!</h2>
        <p>"Empower yourself and shine in your passion!"</p>
      </div>
    </div>
  );
};

export default Home;
