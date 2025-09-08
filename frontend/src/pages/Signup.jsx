import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [education, setEducation] = useState('');
  const [passion, setPassion] = useState('');
  const [number, setNumber] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const userDetails = { name, age, location, education, passion, number };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    navigate('/home');
  };

  return (
    <div className="auth-box">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Educational Qualification"
          value={education}
          onChange={e => setEducation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Passion"
          value={passion}
          onChange={e => setPassion(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
        <button type="submit" className="button">Register</button>
      </form>
      <div className="register-link">
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};

export default Signup;
