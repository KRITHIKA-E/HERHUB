import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/client";
import "../../index.css";

const HirerSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    description: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/hirer/signup", formData);
      localStorage.setItem("hirerToken", res.data.token);
      localStorage.setItem("hirer", JSON.stringify(res.data.hirer));
      localStorage.setItem("hirerLoggedIn", "true");
      navigate("/hirer/dashboard");
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Signup failed!" });
    }
  };

  return (
    <div className="entrance-bg">
      <section className="hero-section fade-in" style={{ flexDirection: "column", gap: "2rem" }}>
        <h1 className="hero-title">Hirer Signup</h1>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "400px", width: "90%", display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="entrance-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="entrance-input"
          />
          <textarea
            name="description"
            placeholder="Company Description"
            value={formData.description}
            onChange={handleChange}
            className="entrance-input"
            rows={4}
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

          {message.text && (
            <p className={message.type === "error" ? "error-text" : "success-text"}>
              {message.text}
            </p>
          )}
        </form>

        <p style={{ marginTop: "1rem", color: "#444" }}>
          Already have a hirer account?{" "}
          <span style={{ color: "#a45fc1", cursor: "pointer" }} onClick={() => navigate("/hirer/login") }>
            Login
          </span>
        </p>
      </section>
    </div>
  );
};

export default HirerSignup;
