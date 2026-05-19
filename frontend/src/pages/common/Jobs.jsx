import React, {
  useEffect,
  useState
} from "react";

import api from "../../api/client";

import "../../index.css";

const Jobs = () => {

  const [jobs, setJobs] = useState([]);

  // FETCH JOBS

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const res = await api.get(
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

    fetchJobs();

  }, []);
const handleApply =
  async (jobId) => {

    try {

      const user =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );

      if (!user) {

        alert(
          "Please login first"
        );

        return;
      }

      await api.post(

        "/jobs/apply",

        {

          jobId,

          userId: user.id,

        }
      );

      alert(
        "Application submitted 🌸"
      );

    } catch (err) {

      console.error(err);

      alert(
        "Already applied or failed"
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

              <button
  onClick={() =>
    handleApply(job.id)
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