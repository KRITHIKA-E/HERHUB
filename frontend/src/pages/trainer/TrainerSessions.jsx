import React, {
  useEffect,
  useState
} from "react";

import "../../index.css";

const TrainerSessions = () => {

  const [sessions,
    setSessions] =
    useState([]);

  useEffect(() => {

    fetchSessions();

  }, []);

  const fetchSessions =
    () => {

      const savedSessions =

        JSON.parse(
          localStorage.getItem(
            "liveSessions"
          )
        ) || [];

      setSessions(
        savedSessions
      );
    };

  const handleDelete =
    (id) => {

      const updatedSessions =

        sessions.filter(
          (session) =>
            session.id !== id
        );

      localStorage.setItem(

        "liveSessions",

        JSON.stringify(
          updatedSessions
        )
      );

      setSessions(
        updatedSessions
      );

      alert(
        "Session deleted 🌸"
      );
    };

  return (

    <div className="dashboard-page">

      <div className="dashboard-header">

        <h1>
          My Live Sessions 🎥
        </h1>

        <p>
          Manage your upcoming
          training sessions.
        </p>

      </div>

      <div className="courses-grid">

        {sessions.length === 0 ? (

          <p>
            No live sessions created yet.
          </p>

        ) : (

          sessions.map((session) => (

            <div
              key={session.id}
              className="course-card"
            >

              <h3>
                {session.title}
              </h3>

              <p>
                {session.description}
              </p>

              <span>
                🕒 {session.time}
              </span>

              <button
                onClick={() =>
                  handleDelete(
                    session.id
                  )
                }
              >
                Delete Session
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default TrainerSessions;