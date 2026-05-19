import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/client";
import "../../index.css";

const HirerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/hirer/login", formData);
      localStorage.setItem("hirerToken", res.data.token);
      localStorage.setItem("hirer", JSON.stringify(res.data.hirer));
      localStorage.setItem("hirerLoggedIn", "true");
      navigate("/hirer/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.message || "Login failed!");
    }
  };

  return (
    <div className="entrance-bg">
      <section className="hero-section fade-in" style={{ flexDirection: "column", gap: "2rem" }}>
        <h1 className="hero-title">Hirer Login</h1>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "400px", width: "90%", display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
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
          Don't have a hirer account?{" "}
          <span style={{ color: "#a45fc1", cursor: "pointer" }} onClick={() => navigate("/hirer/signup") }>
            Sign Up
          </span>
        </p>
      </section>
    </div>
  );
};

export default HirerLogin;
