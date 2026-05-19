import React, {
  useState
} from "react";

import api
from "../../api/client";

import "../../index.css";

const CreateCourse = () => {

  const [courseData,
    setCourseData] =
    useState({

      title: "",

      description: "",

      level: "",

    });

  const handleChange =
    (e) => {

      setCourseData({

        ...courseData,

        [e.target.name]:
          e.target.value,

      });
    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const trainer =

          JSON.parse(
            localStorage.getItem(
              "trainer"
            )
          );

        await api.post(

          "/courses",

          {

            ...courseData,

            trainerName:
              trainer?.name ||
              "Trainer",

          }
        );

        alert(
          "Course created successfully 🌸"
        );

        setCourseData({

          title: "",

          description: "",

          level: "",

        });

      } catch (error) {

        console.error(error);

        alert(
          "Course creation failed"
        );
      }
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          Create Course 📚
        </h1>

        <p>
          Share knowledge and empower homemakers.
        </p>

      </div>

      <form
        className="job-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={courseData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Course Description"
          value={courseData.description}
          onChange={handleChange}
          required
        />

        <select
          name="level"
          value={courseData.level}
          onChange={handleChange}
          required
        >

          <option value="">
            Select Level
          </option>

          <option value="Beginner">
            Beginner
          </option>

          <option value="Intermediate">
            Intermediate
          </option>

          <option value="Advanced">
            Advanced
          </option>

        </select>

        <button type="submit">
          Create Course
        </button>

      </form>

    </div>
  );
};

export default CreateCourse;