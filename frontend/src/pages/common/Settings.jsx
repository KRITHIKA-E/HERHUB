import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

const Settings = () => {
  const navigate = useNavigate();
  const hasUser = Boolean(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    if (!hasUser) {
      navigate("/login");
    }
  }, [hasUser, navigate]);

  return (
    <div className="home-bg fade-in">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>Account Settings</h1>
          <p>Manage your account, review privacy settings, and update your profile from one place.</p>
          <button className="cta-btn ripple" onClick={() => navigate("/profile")}>Go to Profile</button>
        </div>
        <div className="home-hero-image">
          <img src="/images/dashboard.png" alt="Settings" />
        </div>
      </section>
    </div>
  );
};

export default Settings;
