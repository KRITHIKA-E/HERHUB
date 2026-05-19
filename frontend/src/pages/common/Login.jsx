import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/client";
import "../../index.css";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // ROLE DETECTION

  const rolePrefix = location.pathname.startsWith("/trainer")
    ? "trainer"
    : location.pathname.startsWith("/homemaker")
    ? "homemaker"
    : location.pathname.startsWith("/hirer")
    ? "hirer"
    : "";

  // DYNAMIC PATHS

  const signupPath = rolePrefix
    ? `/${rolePrefix}/signup`
    : "/signup";

  const dashboardPath = rolePrefix
    ? `/${rolePrefix}/dashboard`
    : "/dashboard";

  // FORM STATE

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post(
        "/auth/login",
        formData
      );

      // SAVE TOKEN

      localStorage.setItem(
        "token",
        res.data.token
      );

      // SAVE USER

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // REDIRECT

      navigate(dashboardPath);

    } catch (err) {

      console.error(err);

      setError(
        err.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (

    <div className="entrance-bg">

      <section
        className="hero-section fade-in"
        style={{
          flexDirection: "column",
          gap: "2rem",
        }}
      >

        <h1 className="hero-title">
          Welcome Back to HER HUB 🌸
        </h1>

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
            type="email"
            name="email"
            placeholder="Email Address"
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

          <button
            type="submit"
            className="enter-btn ripple"
          >
            Login
          </button>

        </form>

        {error && (
          <p className="error-text">
            {error}
          </p>
        )}

        <p
          style={{
            marginTop: "1rem",
            color: "#444",
          }}
        >

          Don't have an account?{" "}

          <span
            style={{
              color: "#a45fc1",
              cursor: "pointer",
            }}
            onClick={() => navigate(signupPath)}
          >
            Sign Up
          </span>

        </p>

      </section>

    </div>
  );
};

export default Login;