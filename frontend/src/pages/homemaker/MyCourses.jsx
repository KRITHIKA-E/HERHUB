import React from "react";

import "../../index.css";

const MyCourses = () => {

  const enrolledCourses =

    JSON.parse(
      localStorage.getItem(
        "enrolledCourses"
      )
    ) || [];

  const user =

    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const handleComplete =
    (course) => {

      const existingCertificates =

        JSON.parse(
          localStorage.getItem(
            "certificates"
          )
        ) || [];

      const alreadyExists =

        existingCertificates.find(
          (item) =>
            item.courseName ===
            course.title
        );

      if (alreadyExists) {

        alert(
          "Certificate already generated 🌸"
        );

        return;
      }

      const newCertificate = {

        id: Date.now(),

        courseName:
          course.title,

        userName:
          user?.name,

      };

      localStorage.setItem(

        "certificates",

        JSON.stringify([

          ...existingCertificates,

          newCertificate,

        ])
      );

      alert(
        "Course completed and certificate generated 🏆"
      );
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          My Learning Courses 📚
        </h1>

        <p>
          Continue your enrolled learning journey.
        </p>

      </div>

      <div className="courses-grid">

        {enrolledCourses.length === 0 ? (

          <p>
            No enrolled courses yet.
          </p>

        ) : (

          enrolledCourses.map((course) => (

            <div
              key={course.id}
              className="course-card"
            >

              <h3>
                {course.title}
              </h3>

              <p>
                {course.description}
              </p>

              <span>
                {course.level}
              </span>

              <div
  style={{
    marginTop: "1rem",
  }}
>

  <div
    style={{
      background: "#f3d9e6",
      borderRadius: "10px",
      overflow: "hidden",
      height: "12px",
      marginBottom: "1rem",
    }}
  >

    <div
      style={{
        width: "100%",
        background: "#c2185b",
        height: "100%",
      }}
    />

  </div>

  <button
    onClick={() =>
      handleComplete(
        course
      )
    }
  >
    Complete Course
  </button>

</div>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default MyCourses;