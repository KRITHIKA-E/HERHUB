import React from "react";

import "../../index.css";

const Profile = () => {

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

  if (!user) {

    return (

      <p>
        No profile found.
      </p>
    );
  }

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >

          <div
            style={{
              fontSize: "4rem",
            }}
          >
            👩
          </div>

          <h1>
            {user.name} 🌸
          </h1>

          <p>
            📧 {user.email}
          </p>

          <p>
            📍 {user.city}
          </p>

        </div>


        {/* BASIC DETAILS */}

        <div className="profile-section">

          <h2>
            Personal Details
          </h2>

          <p>
            💡 Interest:
            {" "}
            {user.interest}
          </p>

          <p>
            🗣 Language:
            {" "}
            {user.language}
          </p>

          <p>
            ✨ Skills:
            {" "}
            {
              user.skills ||
              "Not added"
            }
          </p>

          <p>
            📝 Bio:
            {" "}
            {
              user.bio ||
              "No bio added yet."
            }
          </p>

        </div>


        {/* LEARNING STATS */}

        <div className="profile-section">

          <h2>
            Learning Journey 📚
          </h2>

          <p>
            Enrolled Courses:
            {" "}
            {
              enrolledCourses.length
            }
          </p>

          <p>
            Certificates Earned:
            {" "}
            {
              certificates.length
            }
          </p>

        </div>


        {/* CERTIFICATES */}

        <div className="profile-section">

          <h2>
            Certificates 🏆
          </h2>

          {certificates.length === 0 ? (

            <p>
              No certificates yet.
            </p>

          ) : (

            certificates.map(
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
            )
          )}

        </div>


        {/* BADGES */}

        <div className="profile-section">

          <h2>
            Achievement Badges 🏅
          </h2>

          <div className="profile-achievement">
            🌸 Skill Starter
          </div>

          {certificates.length > 0 && (

            <div className="profile-achievement">
              🏆 Certified Learner
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Profile;