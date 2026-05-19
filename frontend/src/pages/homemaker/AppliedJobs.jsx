import React, {
  useEffect,
  useState
} from "react";

import api
from "../../api/client";

import "../../index.css";

const AppliedJobs = () => {

  const [applications,
    setApplications] =
    useState([]);

  const user =

    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  useEffect(() => {

    fetchApplications();

  }, []);

  const fetchApplications =
    async () => {

      try {

        const res =
          await api.get(
            "/jobs/applications"
          );

        const filtered =

          res.data.filter(
            (app) =>
              app.userId ===
              user.id
          );

        setApplications(
          filtered
        );

      } catch (error) {

        console.error(
          error
        );
      }
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          My Job Applications 💼
        </h1>

        <p>
          Track opportunities you
          have applied for.
        </p>

      </div>

      <div className="courses-grid">

        {applications.length === 0 ? (

          <p>
            No applications yet.
          </p>

        ) : (

          applications.map((app) => (

            <div
              key={app.id}
              className="course-card"
            >

              <h3>
                {
                  app.Job?.title
                }
              </h3>

              <p>
                📧 {
                  app.User?.email
                }
              </p>

              <span>
                🌸 Applied Successfully
              </span>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default AppliedJobs;