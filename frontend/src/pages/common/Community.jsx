import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../index.css";

const sectionTitles = {
  forum: "Community Forum",
  mentorship: "Mentorship Support",
  success: "Success Stories",
};

const sectionDescriptions = {
  forum:
    "Ask questions, share your journey, and learn from other homemakers building careers.",
  mentorship:
    "Connect with mentors, get guidance, and grow your confidence step by step.",
  success:
    "Read inspiring success stories from women who transformed passions into professions.",
};

const Community = () => {
  const navigate = useNavigate();
  const { section } = useParams();
  const title = sectionTitles[section] || "Community Connections";
  const description = sectionDescriptions[section] ||
    "Get community support, mentorship guidance, and inspiration to reach your next milestone.";

  return (
    <div className="home-bg fade-in">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="cta-btn ripple" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
        <div className="home-hero-image">
          <img src="/images/dashboard.png" alt="Community" />
        </div>
      </section>

      <section className="home-quick-links">
        <div className="quick-card">
          <h3>Forum</h3>
          <p>Share advice, find friends, and celebrate wins together.</p>
        </div>
        <div className="quick-card">
          <h3>Mentorship</h3>
          <p>Access mentorship resources and guidance from experienced professionals.</p>
        </div>
        <div className="quick-card">
          <h3>Stories</h3>
          <p>Inspiration from members who have grown their skills and income at home.</p>
        </div>
      </section>
    </div>
  );
};

export default Community;
