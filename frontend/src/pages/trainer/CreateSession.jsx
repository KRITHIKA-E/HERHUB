import React, {
  useState
} from "react";

import "../../index.css";

const CreateSession = () => {

  const [sessionData,
    setSessionData] =
    useState({

      title: "",

      trainer: "",

      date: "",

      time: "",

    });

  const handleChange =
    (e) => {

      setSessionData({

        ...sessionData,

        [e.target.name]:
          e.target.value,

      });
    };

  const handleSubmit =
    (e) => {

      e.preventDefault();

      const existingSessions =

        JSON.parse(
          localStorage.getItem(
            "sessions"
          )
        ) || [];

      const newSession = {

        id: Date.now(),

        ...sessionData,

      };

      localStorage.setItem(

        "sessions",

        JSON.stringify([

          ...existingSessions,

          newSession,

        ])
      );

      alert(
        "Live session scheduled 🌸"
      );

      setSessionData({

        title: "",

        trainer: "",

        date: "",

        time: "",

      });
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          Schedule Live Session 🎥
        </h1>

        <p>
          Conduct interactive learning workshops.
        </p>

      </div>

      <form
        className="job-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="title"
          placeholder="Session Title"
          value={sessionData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="trainer"
          placeholder="Trainer Name"
          value={sessionData.trainer}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={sessionData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={sessionData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Schedule Session
        </button>

      </form>

    </div>
  );
};

export default CreateSession;