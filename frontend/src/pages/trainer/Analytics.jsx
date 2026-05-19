import React, {
  useEffect,
  useState
} from "react";

import api
from "../../api/client";

import "../../index.css";

const Analytics = () => {

  const [analytics,
    setAnalytics] =
    useState({

      totalCourses: 0,

      totalEnrollments: 0,

      uniqueLearners: 0,

    });

  useEffect(() => {

    fetchAnalytics();

  }, []);


  // FETCH ANALYTICS

  const fetchAnalytics =
    async () => {

      try {

        const res =
          await api.get(
            "/analytics"
          );

        setAnalytics(
          res.data
        );

      } catch (error) {

        console.error(
          error
        );
      }
    };

  return (

    <div className="dashboard-page">

      <div className="dashboard-header">

        <h1>
          Trainer Analytics 📈
        </h1>

        <p>
          Track learning engagement
          and platform growth.
        </p>

      </div>


      {/* ANALYTICS CARDS */}

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>
            📚 Total Courses
          </h2>

          <div
            className="progress-number"
          >
            {
              analytics.totalCourses
            }
          </div>

        </div>


        <div className="dashboard-card">

          <h2>
            🌸 Total Enrollments
          </h2>

          <div
            className="progress-number"
          >
            {
              analytics.totalEnrollments
            }
          </div>

        </div>


        <div className="dashboard-card">

          <h2>
            👩 Total Learners
          </h2>

          <div
            className="progress-number"
          >
            {
              analytics.uniqueLearners
            }
          </div>

        </div>


        <div className="dashboard-card">

          <h2>
            🚀 Platform Growth
          </h2>

          <div
            className="progress-number"
          >
            Active
          </div>

        </div>

      </div>


      {/* INSIGHTS SECTION */}

      <section
        className="notification-section"
      >

        <h2
          className="notification-heading"
        >
          Platform Insights 🌸
        </h2>

        <div
          className="notification-list"
        >

          <div
            className="notification-card"
          >
            📚 Trainers are actively creating learning programs.
          </div>

          <div
            className="notification-card"
          >
            🌸 Homemakers are engaging with skill-building opportunities.
          </div>

          <div
            className="notification-card"
          >
            🚀 HER HUB learning ecosystem is growing steadily.
          </div>

          <div
            className="notification-card"
          >
            💡 More enrollments indicate increasing community participation.
          </div>

        </div>

      </section>

    </div>
  );
};

export default Analytics;