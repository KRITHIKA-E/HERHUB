import React, {
  useEffect,
  useState,
} from "react";

import api from "../../api/client";

import "../../index.css";

const Applications = () => {

  const [applications,
    setApplications] =
    useState([]);

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

        setApplications(
          res.data
        );

      } catch (err) {

        console.error(err);
      }
    };

  return (

    <div className="jobs-page">

      <h1>
        Job Applications 🌸
      </h1>

      <div className="jobs-grid">

        {applications.length === 0 ? (

          <p>
            No applications yet.
          </p>

        ) : (

          applications.map(
            (app) => (

              <div
                key={app.id}
                className="job-card"
              >

                <h2>
                  {
                    app.User?.name
                  }
                </h2>

                <p>
                  📧 {
                    app.User?.email
                  }
                </p>

                <p>
                  Applied For:
                  {" "}
                  {
                    app.Job?.title
                  }
                </p>

              </div>
            )
          )
        )}

      </div>

    </div>
  );
};

export default Applications;