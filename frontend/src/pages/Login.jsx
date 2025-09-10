import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css"; // make sure theme CSS is imported

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/api/login", formData);
    alert("Login successful!");
    navigate("/home"); // redirect to your Home page
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Login failed!");
  }
};

  return (
    <div className="entrance-bg">
      <section className="hero-section fade-in" style={{ flexDirection: "column", gap: "2rem" }}>
        <h1 className="hero-title">Welcome Back to HER HUB</h1>

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
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="entrance-input"
          />

          <button type="submit" className="enter-btn ripple">
            Login
          </button>
        </form>

        <p style={{ marginTop: "1rem", color: "#444" }}>
          Don't have an account?{" "}
          <span
            style={{ color: "#a45fc1", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
