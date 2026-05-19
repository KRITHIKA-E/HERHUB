import React, {
  useEffect,
  useState
} from "react";

import "../../index.css";

const MentorRequests = () => {

  const [requests,
    setRequests] =
    useState([]);

  useEffect(() => {

    fetchRequests();

  }, []);

  const fetchRequests =
    () => {

      const savedRequests =

        JSON.parse(
          localStorage.getItem(
            "mentorRequests"
          )
        ) || [];

      setRequests(
        savedRequests
      );
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          Mentor Requests 🌸
        </h1>

        <p>
          Support homemakers through
          guidance and mentorship.
        </p>

      </div>

      <div className="courses-grid">

        {requests.length === 0 ? (

          <p>
            No mentor requests yet.
          </p>

        ) : (

          requests.map((request) => (

            <div
              key={request.id}
              className="course-card"
            >

              <h3>
                👩 {
                  request.name
                }
              </h3>

              <p>
                💡 Topic:
                {" "}
                {request.topic}
              </p>

              <p>
                📝 {
                  request.message
                }
              </p>

              <button>
                Respond
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default MentorRequests;