import React, {
  useState
} from "react";

import "../../index.css";

const MentorRequest = () => {

  const [requestData,
    setRequestData] =
    useState({

      name: "",

      topic: "",

      message: "",

    });

  const handleChange =
    (e) => {

      setRequestData({

        ...requestData,

        [e.target.name]:
          e.target.value,

      });
    };

  const handleSubmit =
    (e) => {

      e.preventDefault();

      const existingRequests =

        JSON.parse(
          localStorage.getItem(
            "mentorRequests"
          )
        ) || [];

      const newRequest = {

        id: Date.now(),

        ...requestData,

      };

      localStorage.setItem(

        "mentorRequests",

        JSON.stringify([

          ...existingRequests,

          newRequest,

        ])
      );

      alert(
        "Mentor request submitted 🌸"
      );

      setRequestData({

        name: "",

        topic: "",

        message: "",

      });
    };

  return (

    <div className="jobs-page">

      <div className="jobs-header">

        <h1>
          Request Mentor Support 🌸
        </h1>

        <p>
          Connect with expert trainers
          for guidance and support.
        </p>

      </div>

      <form
        className="job-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={requestData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="topic"
          placeholder="Mentorship Topic"
          value={requestData.topic}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Explain your guidance request"
          value={requestData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Request
        </button>

      </form>

    </div>
  );
};

export default MentorRequest;