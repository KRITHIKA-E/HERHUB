import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/client";
import "../../index.css";

const Signup = () => {

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

  const dashboardPath = rolePrefix
    ? `/${rolePrefix}/dashboard`
    : "/dashboard";

  const loginPath = rolePrefix
    ? `/${rolePrefix}/login`
    : "/login";

  // FORM STATE

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    interest: "",
    language: "",
  });

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage({
      type: "",
      text: "",
    });
  };

  // HANDLE SIGNUP

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const res = await api.post(
      "/auth/signup",
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

    alert(
      err.response?.data?.message ||
      "Signup failed"
    );
  }
};

  return (

    <div className="signup-page">

      <div className="signup-card">

        <h1>Join HER HUB 🌸</h1>

        <p>
          Begin your journey towards learning,
          confidence, and financial independence.
        </p>

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City / Village"
            value={formData.city}
            onChange={handleChange}
          />

          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          >

            <option value="">
              Select Your Interest
            </option>

            <option value="Tailoring">
              Tailoring
            </option>

            <option value="Baking">
              Baking
            </option>

            <option value="Beauty Care">
              Beauty Care
            </option>

            <option value="Teaching">
              Teaching
            </option>

            <option value="Handicrafts">
              Handicrafts
            </option>

          </select>

          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
          >

            <option value="">
              Preferred Language
            </option>

            <option value="Tamil">
              Tamil
            </option>

            <option value="Hindi">
              Hindi
            </option>

            <option value="English">
              English
            </option>

          </select>

          <button type="submit">
            Create Account
          </button>
          <p
  style={{
    marginTop: "1rem",
    color: "#444",
    textAlign: "center",
  }}
>

  Already have an account?{" "}

  <span
    style={{
      color: "#a45fc1",
      cursor: "pointer",
      fontWeight: "600",
    }}
    onClick={() => navigate(loginPath)}
  >
    Login
  </span>

</p>

        </form>

      </div>

    </div>
  );
};

export default Signup;