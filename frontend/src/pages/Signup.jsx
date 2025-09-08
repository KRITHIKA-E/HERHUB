import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Signup = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = e => {
    e.preventDefault();
    if(name && email && password) {
      alert('Signup successful!');
      navigate('/login');
    }
  };

  return (
    <div className="center-box">
      <img src="/logo.jpg" alt="HER HUB Logo" style={{ width: '120px', marginBottom: '1rem' }} />
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
};

export default Signup;
