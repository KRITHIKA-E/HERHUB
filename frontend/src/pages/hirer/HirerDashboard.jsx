import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import api from "../../api/client";

import "../../index.css";

const HirerDashboard = () => {

  const navigate =
    useNavigate();

  const hirer =
    JSON.parse(
      localStorage.getItem(
        "hirer"
      )
    );

  const hirerToken =
    localStorage.getItem(
      "hirerToken"
    );

  // PROTECT PAGE

  useEffect(() => {

    if (!hirerToken) {

      navigate(
        "/hirer/login"
      );
    }

  }, [hirerToken, navigate]);


  // JOB FORM STATE

  const [jobData, setJobData] =
    useState({

      title: "",

      description: "",

      location: "",

    });


  // HANDLE INPUT

  const handleChange = (e) => {

    setJobData({

      ...jobData,

      [e.target.name]:
        e.target.value,

    });
  };


  // HANDLE JOB POST

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await api.post(
          "/jobs",
          jobData
        );

        alert(
          "Job posted successfully 🌸"
        );

        setJobData({

          title: "",

          description: "",

          location: "",

        });

      } catch (err) {

        console.error(err);

        alert(
          "Job posting failed"
        );
      }
    };


  return (

    <div className="hirer-page">

      {/* HEADER */}

      <div className="hirer-header">

        <h1>
          Welcome,
          {hirer?.companyName ||
            " Hirer"} 🏢
        </h1>

        <p>
          Discover talented homemakers,
          create opportunities,
          and empower careers.
        </p>

      </div>


      {/* CREATE JOB FORM */}

      <form
        className="job-form"
        onSubmit={handleSubmit}
      >

        <h2>
          Create New Opportunity 🌸
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Post Job
        </button>

      </form>


      {/* DASHBOARD CARDS */}

      <div className="hirer-grid">

        <div className="hirer-card">

          <h2>
            💼 Posted Opportunities
          </h2>

          <p>
            View and manage
            posted opportunities.
          </p>

          <button
            onClick={() =>
              navigate(
                "/hirer/jobs"
              )
            }
          >
            View Posted Jobs
          </button>

        </div>


        <div className="hirer-card">

          <h2>
            👩 Browse Talent
          </h2>

          <p>
            Explore homemaker
            profiles.
          </p>

          <button>
            View Profiles
          </button>

        </div>


        <div className="hirer-card">

          <h2>
            📄 Applications
          </h2>

          <p>
            Manage candidate
            applications.
          </p>

        <button
  onClick={() =>
    navigate(
      "/hirer/applications"
    )
  }
>
  View Applications
</button>

        </div>

      </div>
      <div className="dashboard-card">

  <h2>
    🌸 Explore Talent
  </h2>

  <p>
    Discover skilled homemakers,
    certificates, and learning achievements.
  </p>

  <button
    onClick={() =>
      navigate(
        "/hirer/homemaker-profiles"
      )
    }
  >
    View Profiles
  </button>

</div>

    </div>
    
  );
};

export default HirerDashboard;