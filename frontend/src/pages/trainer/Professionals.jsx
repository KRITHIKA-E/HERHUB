import React from "react";

import {
  useNavigate
} from "react-router-dom";

import "../../index.css";

const Professionals = () => {

  const navigate =
    useNavigate();

  return (

    <div className="trainer-page">

      <div className="trainer-header">

        <h1>
          Trainer Dashboard 👩‍🏫
        </h1>

        <p>
          Guide, mentor, and empower homemakers
          through skill-based learning.
        </p>

      </div>


      {/* TRAINER CARDS */}

      <div className="trainer-grid">

        {/* LIVE CLASSES */}

        <div className="trainer-card">

          <h2>
            🎥 Conduct Live Classes
          </h2>

          <p>
            Schedule workshops and interactive
            learning sessions for homemakers.
          </p>

          <button
  onClick={() =>
    navigate(
      "/trainer/create-session"
    )
  }
>
  Create Session
</button>

        </div>


        {/* CREATE COURSE */}

        <div className="trainer-card">

          <h2>
            📚 Upload Courses
          </h2>

          <p>
            Share structured learning content
            and skill-building materials.
          </p>

          <button
            onClick={() =>
              navigate(
                "/trainer/create-course"
              )
            }
          >
            Upload Course
          </button>

        </div>
<div className="trainer-card">

  <h2>
    🎥 Manage Sessions
  </h2>

  <p>
    View and manage all
    upcoming live classes.
  </p>

  <button
    onClick={() =>
      navigate(
        "/trainer/sessions"
      )
    }
  >
    View Sessions
  </button>

</div>

        {/* VIEW COURSES */}

        <div className="trainer-card">

          <h2>
            📖 Manage Courses
          </h2>

          <p>
            View, manage, and delete
            your uploaded trainer courses.
          </p>

          <button
            onClick={() =>
              navigate(
                "/trainer/courses"
              )
            }
          >
            View Courses
          </button>

        </div>


        {/* MENTOR */}

        <div className="trainer-card">

          <h2>
            🌸 Mentor Learners
          </h2>

          <p>
            Provide guidance, support,
            and career mentoring.
          </p>

          <button
  onClick={() =>
    navigate(
      "/trainer/mentor-requests"
    )
  }
>
  View Requests
</button>

        </div>


        {/* ANALYTICS */}

        <div className="trainer-card">

          <h2>
            📈 Student Progress
          </h2>

          <p>
            Track learner engagement
            and course completion progress.
          </p>

          <button
  onClick={() =>
    navigate(
      "/trainer/analytics"
    )
  }
>
  View Analytics
</button>

        </div>

      </div>

    </div>
  );
};

export default Professionals;