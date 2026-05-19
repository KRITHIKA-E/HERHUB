import React, {
  useEffect,
  useState
} from "react";

import { useNavigate }
from "react-router-dom";

import api from "../../api/client";

import "../../index.css";

const Jobs = () => {

  const navigate =
    useNavigate();

  const [jobs, setJobs] =
    useState([]);

  // ======================
  // FETCH JOBS
  // ======================

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

        console.error(
          "Job fetch failed:",
          err
        );
      }
    };

  // ======================
  // APPLY JOB
  // ======================

  const handleApply =
    async (jobId) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const user =
          JSON.parse(
            localStorage.getItem(
              "user"
            )
          );

        // LOGIN CHECK

        if (!token || !user) {

          alert(
            "Please login first 🌸"
          );

          navigate("/login");

          return;
        }

        // APPLY API

        const res =
          await api.post(

            "/jobs/apply",

            {

              jobId,

              userId:
                user.id,

            }
          );

        alert(
          res.data.message
        );

      } catch (err) {

        console.error(err);

        alert(

          err.message ||

          "Application failed"

        );
      }
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          Opportunities for Homemakers 🌸
        </h1>

        <p>
          Explore flexible work opportunities
          designed for skilled women.
        </p>

      </div>

      <div className="jobs-grid">

        {jobs.length > 0 ? (

          jobs.map((job) => (

            <div
              className="job-card"
              key={job.id}
            >

              <h2>
                {job.title}
              </h2>

              <p>
                {job.description}
              </p>

              <span>
                📍 {job.location}
              </span>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "600",
                }}
              >
                🏢 {
                  job.companyName
                }
              </p>

              <button

                onClick={() =>
                  handleApply(
                    job.id
                  )
                }

              >
                Apply Now
              </button>

            </div>
          ))

        ) : (

          <p>
            No jobs available yet.
          </p>
        )}

      </div>

    </div>
  );
};

export default Jobs;