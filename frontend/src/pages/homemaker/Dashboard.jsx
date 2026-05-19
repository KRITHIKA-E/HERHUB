import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      {/* PROFILE CARD */}

<div className="profile-banner">

  <div className="profile-avatar">
    👩
  </div>

  <div className="profile-details">

    <h2>Welcome, Lakshmi 🌸</h2>

    <p>
      Tailoring Enthusiast • Chennai
    </p>

    <span>
      Beginner Level Learner
    </span>
    <button
  className="profile-btn"
  onClick={() => navigate("/profile")}
>
  Edit Profile
</button>
  </div>

</div>
{/* LANGUAGE SELECTOR */}

<div className="language-bar">

  <p>Select Language 🌐</p>

  <div className="language-buttons">

    <button>English</button>

    <button>தமிழ்</button>

    <button>हिन्दी</button>

  </div>

</div>
  <div className="dashboard-header">

    <h1>Welcome Back, Homemaker 🌸</h1>

    <p>
      Continue your learning journey and explore
      opportunities curated for you.
    </p>

  </div>


  {/* DASHBOARD CARDS */}

  <div className="dashboard-grid">

    <div className="dashboard-card">

      <h2>📚 Recommended Skills</h2>

      <p>
        Tailoring, Baking, Beauty Care,
        Digital Marketing
      </p>

    </div>


    <div className="dashboard-card">

      <h2>🎥 Upcoming Live Classes</h2>

      <p>
        Join interactive training sessions
        from expert mentors.
      </p>

    </div>


    <div className="dashboard-card">

      <h2>💼 Job Opportunities</h2>

      <p>
        Explore remote and local job opportunities
        matching your interests.
      </p>
      <button
  className="dashboard-btn"
  onClick={() => navigate("/jobs")}
>
  Browse Jobs
</button>
    </div>


    <div className="dashboard-card">

      <h2>🌸 Community Support</h2>

      <p>
        Connect with inspiring homemakers
        and supportive mentors.
      </p>
      

    </div>

  </div>
  {/* NOTIFICATIONS */}

<section className="notification-section">

  <h2 className="notification-heading">
    Latest Updates 🔔
  </h2>

  <div className="notification-list">

    <div className="notification-card">
      ✅ New tailoring workshop starts tomorrow at 5 PM.
    </div>

    <div className="notification-card">
      🌸 Your mentor replied to your community question.
    </div>

    <div className="notification-card">
      💼 A new remote job opportunity is available.
    </div>

    <div className="notification-card">
      🎉 Congratulations! You completed 4 learning modules.
    </div>

  </div>

</section>
{/* COURSES SECTION */}

<section className="courses-section">

  <h2 className="courses-heading">
    Popular Learning Programs
  </h2>

  <div className="courses-grid">

    <div className="course-card">

      <h3>🧵 Tailoring Basics</h3>

      <p>
        Learn stitching, measurements,
        blouse design, and tailoring basics.
      </p>

      <span>Beginner Level</span>

      <button>Enroll Now</button>

    </div>


    <div className="course-card">

      <h3>🍰 Home Baking</h3>

      <p>
        Learn cake making, snacks,
        baking techniques, and home business ideas.
      </p>

      <span>Beginner Level</span>

      <button>Enroll Now</button>

    </div>


    <div className="course-card">

      <h3>💄 Beauty & Makeup</h3>

      <p>
        Explore skincare, bridal makeup,
        beauty techniques, and salon basics.
      </p>

      <span>Intermediate Level</span>

      <button>Enroll Now</button>

    </div>


    <div className="course-card">

      <h3>📱 Digital Marketing</h3>

      <p>
        Learn Instagram marketing,
        content creation, and online business growth.
      </p>

      <span>Intermediate Level</span>

      <button>Enroll Now</button>

    </div>

  </div>

</section>
{/* JOB OPPORTUNITIES */}

<section className="jobs-section">

  <h2 className="jobs-heading">
    Opportunities For You
  </h2>

  <div className="jobs-grid">

    <div className="job-card">

      <h3>🏪 Boutique Assistant</h3>

      <p>
        Assist tailoring boutiques with
        stitching and customer support.
      </p>

      <span>📍 Chennai</span>

      <button>Apply Now</button>

    </div>


    <div className="job-card">

      <h3>📱 Social Media Helper</h3>

      <p>
        Help small businesses manage
        Instagram and WhatsApp marketing.
      </p>

      <span>💻 Remote</span>

      <button>Apply Now</button>

    </div>


    <div className="job-card">

      <h3>🍰 Home Baking Partner</h3>

      <p>
        Work with local bakery startups
        and manage home-based baking orders.
      </p>

      <span>📍 Coimbatore</span>

      <button>Apply Now</button>

    </div>


    <div className="job-card">

      <h3>💄 Bridal Makeup Assistant</h3>

      <p>
        Assist beauty professionals during
        wedding and event bookings.
      </p>

      <span>📍 Madurai</span>

      <button>Apply Now</button>

    </div>

  </div>

</section>
{/* LIVE CLASSES */}

<section className="live-section">

  <h2 className="live-heading">
    Upcoming Live Classes
  </h2>

  <div className="live-grid">

    <div className="live-card">

      <h3>🧵 Tailoring Workshop</h3>

      <p>
        Learn blouse cutting and stitching
        techniques from expert trainers.
      </p>

      <span>🕒 Tomorrow • 5 PM</span>

      <button>Join Session</button>

    </div>


    <div className="live-card">

      <h3>📱 Instagram Business Basics</h3>

      <p>
        Learn how to promote small businesses
        using Instagram and WhatsApp.
      </p>

      <span>🕒 Friday • 7 PM</span>

      <button>Join Session</button>

    </div>


    <div className="live-card">

      <h3>💄 Bridal Makeup Session</h3>

      <p>
        Explore bridal beauty techniques
        and client management tips.
      </p>

      <span>🕒 Saturday • 6 PM</span>

      <button>Join Session</button>

    </div>


    <div className="live-card">

      <h3>🍰 Cake Decoration Class</h3>

      <p>
        Learn professional cake decoration
        and home baking presentation styles.
      </p>

      <span>🕒 Sunday • 4 PM</span>

      <button>Join Session</button>

    </div>

  </div>

</section>
{/* PROGRESS TRACKER */}

<section className="progress-section">

  <h2 className="progress-heading">
    Your Progress 🌸
  </h2>

  <div className="progress-grid">

    <div className="progress-card">

      <h3>📚 Courses Completed</h3>

      <div className="progress-number">
        4
      </div>

    </div>


    <div className="progress-card">

      <h3>🎥 Live Sessions Attended</h3>

      <div className="progress-number">
        7
      </div>

    </div>


    <div className="progress-card">

      <h3>💼 Job Applications</h3>

      <div className="progress-number">
        3
      </div>

    </div>


    <div className="progress-card">

      <h3>⭐ Skill Growth</h3>

      <div className="progress-number">
        85%
      </div>

    </div>

  </div>

</section>
{/* MENTOR SUPPORT */}

<section className="mentor-section">

  <h2 className="mentor-heading">
    Connect With Mentors 🌸
  </h2>

  <div className="mentor-grid">

    <div className="mentor-card">

      <h3>👩 Career Mentor</h3>

      <p>
        Get career guidance and confidence-building
        support from experienced mentors.
      </p>

      <span>Available Today</span>

      <button>Connect</button>

    </div>


    <div className="mentor-card">

      <h3>🧵 Tailoring Expert</h3>

      <p>
        Learn tailoring techniques, customer handling,
        and boutique management.
      </p>

      <span>Available Tomorrow</span>

      <button>Connect</button>

    </div>


    <div className="mentor-card">

      <h3>💼 Business Coach</h3>

      <p>
        Get guidance on starting small businesses,
        branding, and income generation.
      </p>

      <span>Online Session</span>

      <button>Connect</button>

    </div>


    <div className="mentor-card">

      <h3>📱 Digital Skills Mentor</h3>

      <p>
        Learn online marketing, Instagram business,
        and digital opportunities.
      </p>

      <span>Weekend Session</span>

      <button>Connect</button>

    </div>

  </div>

</section>
{/* AI RECOMMENDATIONS */}

<section className="ai-section">

  <h2 className="ai-heading">
    AI Recommendations 🤖
  </h2>

  <div className="ai-grid">

    <div className="ai-card">

      <h3>🍰 Baking Business Course</h3>

      <p>
        Based on your interest in cooking and
        home business opportunities.
      </p>

    </div>


    <div className="ai-card">

      <h3>📱 Instagram Marketing Skills</h3>

      <p>
        Recommended to help promote
        small businesses online.
      </p>

    </div>


    <div className="ai-card">

      <h3>🧵 Tailoring Mentor Session</h3>

      <p>
        Suggested mentor session based on
        your recent learning activity.
      </p>

    </div>


    <div className="ai-card">

      <h3>💼 Remote Job Match</h3>

      <p>
        A flexible remote opportunity
        matching your selected interests.
      </p>

    </div>

  </div>

</section>
{/* COMMUNITY FEED */}

<section className="community-feed-section">

  <h2 className="community-feed-heading">
    Community Highlights 🌸
  </h2>

  <div className="community-feed-list">

    <div className="community-feed-card">

      <h3>🎉 Priya completed Tailoring Basics</h3>

      <p>
        She recently finished her first tailoring
        certification and started accepting orders.
      </p>

    </div>


    <div className="community-feed-card">

      <h3>🍰 Anitha launched her baking page</h3>

      <p>
        Started a small Instagram business after
        attending HER HUB baking workshops.
      </p>

    </div>


    <div className="community-feed-card">

      <h3>💄 Kavya joined a bridal makeup internship</h3>

      <p>
        Connected with a beauty mentor through
        the HER HUB mentorship network.
      </p>

    </div>


    <div className="community-feed-card">

      <h3>📱 Meena got her first remote client</h3>

      <p>
        Learned social media management and now
        works with local small businesses.
      </p>

    </div>

  </div>

</section>
{/* ACHIEVEMENT BADGES */}

<section className="badge-section">

  <h2 className="badge-heading">
    Your Achievements 🏆
  </h2>

  <div className="badge-grid">

    <div className="badge-card">

      <div className="badge-icon">
        🌸
      </div>

      <h3>Skill Starter</h3>

      <p>
        Completed your first learning course.
      </p>

    </div>


    <div className="badge-card">

      <div className="badge-icon">
        🎥
      </div>

      <h3>Active Learner</h3>

      <p>
        Attended 5 live learning sessions.
      </p>

    </div>


    <div className="badge-card">

      <div className="badge-icon">
        💼
      </div>

      <h3>Opportunity Explorer</h3>

      <p>
        Applied for your first opportunity.
      </p>

    </div>


    <div className="badge-card">

      <div className="badge-icon">
        🤝
      </div>

      <h3>Community Contributor</h3>

      <p>
        Participated in community discussions.
      </p>

    </div>

  </div>

</section>
</div>

  );
};

export default Dashboard;
