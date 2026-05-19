import React, {
  useEffect,
  useState
} from "react";

import api
from "../../api/client";

import "../../index.css";

const TrainerCourses = () => {

  const [courses,
    setCourses] =
    useState([]);

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses =
    async () => {

      try {

        const res =
          await api.get(
            "/courses"
          );

        setCourses(
          res.data
        );

      } catch (error) {

        console.error(
          error
        );
      }
    };

  const handleDelete =
    async (id) => {

      try {

        await api.delete(
          `/courses/${id}`
        );

        setCourses(

          courses.filter(
            (course) =>
              course.id !== id
          )
        );

        alert(
          "Course deleted 🌸"
        );

      } catch (error) {

        console.error(
          error
        );

        alert(
          "Delete failed"
        );
      }
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          My Uploaded Courses 📚
        </h1>

        <p>
          Manage your trainer courses.
        </p>

      </div>

      <div className="courses-grid">

        {courses.length === 0 ? (

          <p>
            No courses uploaded yet.
          </p>

        ) : (

          courses.map((course) => (

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

              <p>
                👩‍🏫 {
                  course.trainerName
                }
              </p>

              <button
                onClick={() =>
                  handleDelete(
                    course.id
                  )
                }
              >
                Delete Course
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default TrainerCourses;