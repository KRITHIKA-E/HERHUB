import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [passion, setPassion] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { name, age, passion };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <div className="container">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={e=>setAge(e.target.value)} required />
        <input type="text" placeholder="Passion" value={passion} onChange={e=>setPassion(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
