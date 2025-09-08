import React, { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({
    name: '', age: '', location: '', education: '', passion: '', number: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(user));
    window.location.href = "/home";
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1>Create Your Account</h1>
        <form onSubmit={handleSignup}>
          <input type="text" id="name" placeholder="Name" onChange={handleChange} required />
          <input type="number" id="age" placeholder="Age" onChange={handleChange} required />
          <input type="text" id="location" placeholder="Location" onChange={handleChange} required />
          <input type="text" id="education" placeholder="Educational Qualification" onChange={handleChange} required />
          <input type="text" id="passion" placeholder="Passion" onChange={handleChange} required />
          <input type="tel" id="number" placeholder="Phone Number" onChange={handleChange} required />
          <button type="submit" className="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
