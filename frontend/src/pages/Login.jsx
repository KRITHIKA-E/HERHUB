import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    window.location.href = "/home";
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1>Login to HER HUB</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
