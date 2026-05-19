import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import api from "../../api/client";

import "../../index.css";

const HirerJobs = () => {

  const navigate =
    useNavigate();

  const [jobs, setJobs] =
    useState([]);

  // FETCH JOBS

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs =
    async () => {

      try {

        const res =
          await api.get(
            "/jobs"
          );

        setJobs(res.data);

      } catch (err) {

        console.error(err);
      }
    };

  return (

    <div className="jobs-page">

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >

        <h1>
          Posted Opportunities 🌸
        </h1>

        <button
          onClick={() =>
            navigate(
              "/hirer/dashboard"
            )
          }
        >
          Back to Dashboard
        </button>

      </div>


      {/* JOBS GRID */}

      <div className="jobs-grid">

        {jobs.length === 0 ? (

          <p>
            No jobs posted yet.
          </p>

        ) : (

          jobs.map((job) => (

            <div
              key={job.id}
              className="job-card"
            >

              <h2>
                {job.title}
              </h2>

              <p>
                {job.description}
              </p>

              <p>
                📍 {job.location}
              </p>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default HirerJobs;