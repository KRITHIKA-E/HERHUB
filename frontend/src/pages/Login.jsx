import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    navigate('/home');
  };

  return (
    <div className="auth-box">
      <h1>Login to HER HUB</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Login</button>
      </form>
      <div className="register-link">
        <p>Don't have an account? <Link to="/signup">Create one</Link></p>
      </div>
    </div>
  );
};

export default Login;
