import React from "react";

import "../../index.css";

const HomemakerProfiles = () => {

  const user =

    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const certificates =

    JSON.parse(
      localStorage.getItem(
        "certificates"
      )
    ) || [];

  const enrolledCourses =

    JSON.parse(
      localStorage.getItem(
        "enrolledCourses"
      )
    ) || [];

  return (

    <div className="dashboard-page">

      <div className="dashboard-header">

        <h1>
          Homemaker Talent Profiles 🌸
        </h1>

        <p>
          Explore skilled homemakers
          and learning achievements.
        </p>

      </div>

      <div className="courses-grid">

        <div className="profile-card">

          <h2>
            👩 {user?.name}
          </h2>

          <p>
            📍 {user?.city}
          </p>

          <p>
            💡 {user?.interest}
          </p>

          <p>
            ✨ Skills:
            {" "}
            {
              user?.skills ||
              "Not Added"
            }
          </p>

          <p>
            📚 Courses:
            {" "}
            {
              enrolledCourses.length
            }
          </p>

          <p>
            🏆 Certificates:
            {" "}
            {
              certificates.length
            }
          </p>

          <div
            style={{
              marginTop: "1rem",
            }}
          >

            {certificates.map(
              (certificate) => (

                <div
                  key={certificate.id}
                  className="profile-achievement"
                >

                  🌸 {
                    certificate.courseName
                  }

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default HomemakerProfiles;