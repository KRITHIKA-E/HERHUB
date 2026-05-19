import React from "react";

import "../../index.css";

const Badges = () => {

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

  const applications =

    JSON.parse(
      localStorage.getItem(
        "applications"
      )
    ) || [];

  const badges = [];

  // COURSE BADGE

  if (enrolledCourses.length >= 1) {

    badges.push({

      title:
        "Skill Starter 🌸",

      description:
        "Completed first learning enrollment.",

    });
  }

  // CERTIFICATE BADGE

  if (certificates.length >= 1) {

    badges.push({

      title:
        "Certified Learner 🏆",

      description:
        "Earned first course certificate.",

    });
  }

  // APPLICATION BADGE

  if (applications.length >= 1) {

    badges.push({

      title:
        "Opportunity Explorer 💼",

      description:
        "Applied for first opportunity.",

    });
  }

  return (

    <div className="dashboard-page">

      <div className="dashboard-header">

        <h1>
          Achievement Badges 🏅
        </h1>

        <p>
          Celebrate your learning
          and career milestones.
        </p>

      </div>

      <div className="courses-grid">

        {badges.length === 0 ? (

          <p>
            No badges earned yet.
          </p>

        ) : (

          badges.map((badge, index) => (

            <div
              key={index}
              className="badge-card"
            >

              <h2>
                {badge.title}
              </h2>

              <p>
                {badge.description}
              </p>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default Badges;