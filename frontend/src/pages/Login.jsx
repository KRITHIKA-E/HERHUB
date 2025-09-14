import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      // store user info & token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard"); // redirect
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="entrance-bg">
      <section className="hero-section fade-in" style={{ flexDirection: "column", gap: "2rem" }}>
        <h1 className="hero-title">Welcome Back to HER HUB</h1>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "400px", width: "90%", display: "flex", flexDirection: "column", gap: "1.5rem" }}
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

        {error && <p className="error-text">{error}</p>}

        <p style={{ marginTop: "1rem", color: "#444" }}>
          Don't have an account?{" "}
          <span style={{ color: "#a45fc1", cursor: "pointer" }} onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
