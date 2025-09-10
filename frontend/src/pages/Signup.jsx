import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css"; // your theme CSS

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    passion: "",
    education: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/api/signup", formData);
    alert("Signup successful!");
    navigate("/login");
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Signup failed!");
  }
};


  return (
    <div className="entrance-bg">
      <section className="hero-section fade-in" style={{ flexDirection: "column", gap: "2rem" }}>
        <h1 className="hero-title">Create Your HER HUB Account</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "400px",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="entrance-input"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="entrance-input"
          />
          <input
            type="text"
            name="passion"
            placeholder="Passion (e.g., Cooking, Crafting)"
            value={formData.passion}
            onChange={handleChange}
            required
            className="entrance-input"
          />
          <input
            type="text"
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            required
            className="entrance-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="entrance-input"
          />

          <button type="submit" className="enter-btn ripple">
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: "1rem", color: "#444" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#a45fc1", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </section>
    </div>
  );
};

export default Signup;
