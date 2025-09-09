import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    name: '',
    age: '',
    location: '',
    education: '',
    passion: '',
    phone: '',
    username: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!fields.phone) {
      setMessage('Phone number is required');
      return;
    }
    // Navigate to PhoneLogin page passing signup data
    navigate('/PhoneLogin', { state: fields });
  };

  return (
    <div className="auth-box signup-box">
      <h1>Sign Up</h1>
      <form onSubmit={handleSendOtp}>
        <input name="name" placeholder="Name" value={fields.name} onChange={handleChange} required />
        <input name="age" placeholder="Age" type="number" value={fields.age} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={fields.location} onChange={handleChange} required />
        <input name="education" placeholder="Education" value={fields.education} onChange={handleChange} required />
        <input name="passion" placeholder="Passion" value={fields.passion} onChange={handleChange} required />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={fields.phone}
          onChange={handleChange}
          required
        />

        <input name="username" placeholder="Username" value={fields.username} onChange={handleChange} required />
        <input name="Password" placeholder="Password" value={fields.username} onChange={handleChange} required />

        <button type="submit">Send OTP</button>
      </form>

      {message && <p>{message}</p>}
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default Signup;
