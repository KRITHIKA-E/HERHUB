import React, {
  useEffect,
  useState
} from "react";

import "../../index.css";

const LiveSessions = () => {

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
            "sessions"
          )
        ) || [];

      setSessions(
        savedSessions
      );
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          Upcoming Live Sessions 🎥
        </h1>

        <p>
          Join interactive learning workshops
          from expert trainers.
        </p>

      </div>

      <div className="courses-grid">

        {sessions.length === 0 ? (

          <p>
            No sessions scheduled yet.
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
                👩‍🏫 {
                  session.trainer
                }
              </p>

              <p>
                📅 {
                  session.date
                }
              </p>

              <p>
                🕒 {
                  session.time
                }
              </p>

              <button>
                Join Session
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default LiveSessions;