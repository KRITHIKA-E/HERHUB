import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

const Professionals = () => {
  const navigate = useNavigate();

  return (
    <div className="trainer-page">

  <div className="trainer-header">

    <h1>Trainer Dashboard 👩‍🏫</h1>

    <p>
      Guide, mentor, and empower homemakers
      through skill-based learning.
    </p>

  </div>


  {/* TRAINER CARDS */}

  <div className="trainer-grid">

    <div className="trainer-card">

      <h2>🎥 Conduct Live Classes</h2>

      <p>
        Schedule workshops and interactive
        learning sessions for homemakers.
      </p>

      <button>Create Session</button>

    </div>


    <div className="trainer-card">

      <h2>📚 Upload Courses</h2>

      <p>
        Share structured learning content
        and skill-building materials.
      </p>

      <button>Upload Course</button>

    </div>


    <div className="trainer-card">

      <h2>🌸 Mentor Learners</h2>

      <p>
        Provide guidance, support,
        and career mentoring.
      </p>

      <button>View Requests</button>

    </div>


    <div className="trainer-card">

      <h2>📈 Student Progress</h2>

      <p>
        Track learner engagement
        and course completion progress.
      </p>

      <button>View Analytics</button>

    </div>

  </div>

</div>
  );
};

export default Professionals;
