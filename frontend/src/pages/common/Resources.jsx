import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../index.css";

const sectionTitles = {
  articles: "Articles for Homemakers",
  courses: "Courses to Learn New Skills",
  guides: "Practical Career Guides",
};

const sectionDescriptions = {
  articles:
    "Discover expert articles on building your passion, freelancing, and managing home-based work.",
  courses:
    "Find learning paths that help you grow skills, gain confidence, and land meaningful work.",
  guides:
    "Step-by-step guides to turn your passion into a career, with real-world examples.",
};

const Resources = () => {
  const navigate = useNavigate();
  const { section } = useParams();
  const title = sectionTitles[section] || "Learning Resources";
  const description = sectionDescriptions[section] ||
    "Explore resources designed to support your learning, career growth and daily work life.";

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
          <img src="/images/dashboard.png" alt="Resources" />
        </div>
      </section>

      <section className="home-quick-links">
        <div className="quick-card">
          <h3>Passion Planning</h3>
          <p>Read expert stories and practical advice to shape your next steps.</p>
        </div>
        <div className="quick-card">
          <h3>Skill Building</h3>
          <p>Learn new skills through curated tutorials, classes and practical exercises.</p>
        </div>
        <div className="quick-card">
          <h3>Work Support</h3>
          <p>Find tools, checklists, and templates for managing jobs from home.</p>
        </div>
      </section>
    </div>
  );
};

export default Resources;
