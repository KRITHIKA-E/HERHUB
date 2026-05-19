import React, {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import api
from "../../api/client";

const Dashboard = () => {

  const navigate =
    useNavigate();

  const token =
    localStorage.getItem(
      "token"
    );

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [courses,
    setCourses] =
    useState([]);

  useEffect(() => {

    if (!token) {

      navigate("/login");
    }

    fetchCourses();

  }, [token, navigate]);


  // FETCH COURSES

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
          "Course fetch failed:",
          error
        );
      }
    };


  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };


  // ENROLL COURSE

  const handleEnroll =
    async (courseId) => {

      try {

        await api.post(

          "/enrollments",

          {

            userId:
              user.id,

            courseId,

          }
        );

        alert(
          "Course enrolled successfully 🌸"
        );

        navigate(
          "/my-courses"
        );

      } catch (error) {

        console.error(
          error
        );

        alert(
          "Already enrolled or failed"
        );
      }
    };

  return (

    <div className="dashboard-page">

      {/* PROFILE */}

      <div className="profile-banner">

        <div className="profile-avatar">
          👩
        </div>

        <div className="profile-details">

          <h2>
            Welcome,
            {user?.name || " Homemaker"} 🌸
          </h2>

          <p>
            {user?.interest || "Skill Learner"}
            {" • "}
            {user?.city || "India"}
          </p>

          <span>
            Beginner Level Learner
          </span>

          <button
            className="profile-btn"
            onClick={() =>
              navigate("/profile")
            }
          >
            Edit Profile
          </button>

        </div>

      </div>

      {/* HEADER */}

      <div className="dashboard-header">

        <h1>
          Welcome Back, Homemaker 🌸
        </h1>

        <p>
          Continue your learning journey
          and explore opportunities curated for you.
        </p>

      </div>
      {/* QUICK ACTIONS */}

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>
            📚 My Courses
          </h2>

          <button
            onClick={() =>
              navigate("/my-courses")
            }
          >
            Open
          </button>

        </div>


        <div className="dashboard-card">

          <h2>
            🏆 Certificates
          </h2>

          <button
            onClick={() =>
              navigate("/certificates")
            }
          >
            View
          </button>

        </div>
        <div className="dashboard-card">

  <h2>
    🏅 Badges
  </h2>

  <button
    onClick={() =>
      navigate("/badges")
    }
  >
    View
  </button>

</div>

      </div>


      {/* COURSES */}

      <section className="courses-section">

        <h2 className="courses-heading">
          Trainer Uploaded Courses 🌸
        </h2>

        <div className="courses-grid">

          {courses.length === 0 ? (

            <p>
              No trainer courses uploaded yet.
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
                    handleEnroll(
                      course.id
                    )
                  }
                >
                  Enroll Now
                </button>

              </div>
            ))
          )}

        </div>

      </section>


      {/* JOB OPPORTUNITIES */}

      <section className="courses-section">

        <h2 className="courses-heading">
          Opportunities For You 💼
        </h2>

        <div className="courses-grid">

          <div className="course-card">

            <h3>
              🏪 Boutique Assistant
            </h3>

            <p>
              Assist tailoring boutiques with
              stitching and customer support.
            </p>

            <span>
              📍 Chennai
            </span>

            <button
              onClick={() =>
                navigate("/jobs")
              }
            >
              Apply Now
            </button>

          </div>


          <div className="course-card">

            <h3>
              📱 Social Media Helper
            </h3>

            <p>
              Help businesses manage Instagram
              and WhatsApp marketing.
            </p>

            <span>
              💻 Remote
            </span>

            <button
              onClick={() =>
                navigate("/jobs")
              }
            >
              Apply Now
            </button>

          </div>


          <div className="course-card">

            <h3>
              🍰 Home Baking Partner
            </h3>

            <p>
              Work with bakery startups and
              manage home-based baking orders.
            </p>

            <span>
              📍 Coimbatore
            </span>

            <button
              onClick={() =>
                navigate("/jobs")
              }
            >
              Apply Now
            </button>

          </div>


          <div className="course-card">

            <h3>
              💄 Bridal Makeup Assistant
            </h3>

            <p>
              Assist beauty professionals
              during wedding bookings.
            </p>

            <span>
              📍 Madurai
            </span>

            <button
              onClick={() =>
                navigate("/jobs")
              }
            >
              Apply Now
            </button>

          </div>

        </div>

      </section>


      {/* APPLIED JOBS */}

      <section className="courses-section">

        <h2 className="courses-heading">
          My Applications 🌸
        </h2>

        <div className="courses-grid">

          <div className="course-card">

            <h3>
              💼 Track Your Applications
            </h3>

            <p>
              View all jobs you have applied for
              and monitor your opportunities.
            </p>

            <button
              onClick={() =>
                navigate(
                  "/my-applications"
                )
              }
            >
              View Applications
            </button>

          </div>

        </div>

      </section>


      {/* MENTOR SUPPORT */}

      <section className="courses-section">

        <h2 className="courses-heading">
          Mentor Support 🌸
        </h2>

        <div className="courses-grid">

          <div className="course-card">

            <h3>
              👩 Career Mentor
            </h3>

            <p>
              Get career guidance and
              confidence-building support.
            </p>

            <button
              onClick={() =>
                navigate(
                  "/mentor-request"
                )
              }
            >
              Request Mentor
            </button>

          </div>


          <div className="course-card">

            <h3>
              📱 Digital Skills Mentor
            </h3>

            <p>
              Learn online marketing,
              branding, and digital growth.
            </p>

            <button
              onClick={() =>
                navigate(
                  "/mentor-request"
                )
              }
            >
              Request Mentor
            </button>

          </div>

        </div>

      </section>


      {/* LIVE SESSIONS */}

      <section className="courses-section">

        <h2 className="courses-heading">
          Upcoming Live Sessions 🎥
        </h2>

        <div className="courses-grid">

          <div className="course-card">

            <h3>
              🧵 Tailoring Workshop
            </h3>

            <p>
              Learn blouse cutting and
              stitching techniques.
            </p>

            <span>
              Tomorrow • 5 PM
            </span>

            <button
              onClick={() =>
                navigate(
                  "/live-sessions"
                )
              }
            >
              Join Session
            </button>

          </div>


          <div className="course-card">

            <h3>
              📱 Instagram Business Basics
            </h3>

            <p>
              Learn how to promote small
              businesses online.
            </p>

            <span>
              Friday • 7 PM
            </span>

            <button
              onClick={() =>
                navigate(
                  "/live-sessions"
                )
              }
            >
              Join Session
            </button>

          </div>

        </div>

      </section>
{/* COMMUNITY */}

<section className="courses-section">

  <h2 className="courses-heading">
    Community Support 🌸
  </h2>

  <div className="courses-grid">

    <div className="course-card">

      <h3>
        🤝 Join Community
      </h3>

      <p>
        Connect with inspiring homemakers,
        trainers, and mentors.
      </p>

      <button
        onClick={() =>
          navigate(
            "/community-feed"
          )
        }
      >
        Open Community
      </button>

    </div>

  </div>

</section>

      {/* LOGOUT */}

      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
        }}
      >

        <button
          className="dashboard-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Dashboard;