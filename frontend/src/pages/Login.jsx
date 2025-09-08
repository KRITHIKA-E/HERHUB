import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      alert(`Welcome ${res.data.name}`);
      if (res.data.role === 'homemaker') navigate('/homemaker');
      else if (res.data.role === 'professional') navigate('/professional');
    } catch (err) {
      alert(err.response.data.message || 'Login failed');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
