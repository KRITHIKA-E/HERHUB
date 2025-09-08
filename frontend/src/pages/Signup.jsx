import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('homemaker');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/register', { name, email, password, role });
      alert('Registered! Wait for verification.');
      navigate('/login');
    } catch (err) {
      alert(err.response.data.message || 'Signup failed');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="homemaker">Homemaker</option>
            <option value="professional">Professional</option>
          </select>
        </div>
        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
};

export default Signup;
