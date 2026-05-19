import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const quickLinks = [
  { title: "Homemakers", desc: "Explore passion-to-profession paths", link: "/homemakers" },
  { title: "Professionals", desc: "Hire verified talents", link: "/professionals" },
  { title: "Resources", desc: "Articles, courses, and guides", link: "/resources" },
  { title: "Community", desc: "Forums and mentorships", link: "/community" },
];

const Home = () => {
  const navigate = useNavigate();

 return (
  <>

    {/* HERO SECTION */}

    <div className="hero-section">

      <div className="hero-content">

        <h1>
          Empowering Homemakers Through
          <span> Skills, Opportunities & Community</span>
        </h1>

        <p>
          HER HUB helps homemakers learn new skills,
          connect with opportunities, and become
          financially independent.
        </p>

        <div className="hero-buttons">

          <button
  className="primary-btn"
  onClick={() => navigate("/homemaker/signup")}
>
  Join as Homemaker
</button>
          <button
  className="secondary-btn"
  onClick={() => navigate("/trainer/signup")}
>
  Become Trainer
</button>

         <button
  className="secondary-btn"
  onClick={() => navigate("/hirer/signup")}
>
  Hire Talent
</button>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
          alt="Women Empowerment"
        />

      </div>

    </div>


    {/* FEATURES SECTION */}

    <section className="features-section">

      <h2 className="features-heading">
        What HER HUB Offers
      </h2>

      <div className="features-grid">

        <div className="feature-card">
          <div className="feature-icon">📚</div>

          <h3>Skill Learning</h3>

          <p>
            Learn tailoring, baking, beauty care,
            digital skills, and more.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎥</div>

          <h3>Live Classes</h3>

          <p>
            Attend live sessions and learn
            from trainers and mentors.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💼</div>

          <h3>Job Opportunities</h3>

          <p>
            Connect with recruiters and
            apply for opportunities.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌸</div>

          <h3>Community Support</h3>

          <p>
            Grow with supportive communities
            and inspiring homemakers.
          </p>
        </div>

      </div>

    </section>
    {/* SUCCESS STORIES */}

<section className="stories-section">

  <h2 className="stories-heading">
    Success Stories
  </h2>

  <div className="stories-grid">

    <div className="story-card">


      <h3>Lakshmi</h3>

      <p>
        Learned tailoring through HER HUB and
        now earns independently from home.
      </p>

    </div>

    <div className="story-card">


      <h3>Priya</h3>

      <p>
        Started a small baking business after
        attending live classes on HER HUB.
      </p>

    </div>

    <div className="story-card">

      

      <h3>Kavya</h3>

      <p>
        Learned digital skills and connected
        with recruiters for remote opportunities.
      </p>

    </div>

  </div>

</section>
{/* RURAL ACCESSIBILITY SECTION */}

<section className="rural-section">

  <div className="rural-content">

    <h2>
      Empowering Rural Homemakers Across India
    </h2>

    <p>
      HER HUB is designed to support women from
      rural and underserved communities by providing
      simple learning experiences, regional language
      support, and smartphone-friendly access.
    </p>

    <div className="rural-points">

      <div className="rural-card">
        🌐 Regional Language Support
      </div>

      <div className="rural-card">
        📱 Mobile Friendly Learning
      </div>

      <div className="rural-card">
        🎥 Simple Video-Based Training
      </div>

      <div className="rural-card">
        💼 Opportunities For Financial Independence
      </div>

    </div>

  </div>

</section>
{/* FOOTER */}

<footer className="footer-section">

  <div className="footer-container">

    <div className="footer-about">

      <h2>HER HUB</h2>

      <p>
        Empowering homemakers across India through
        learning, opportunities, mentorship, and
        financial independence.
      </p>

    </div>

    <div className="footer-links">

      <h3>Quick Links</h3>

      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Jobs</li>
        <li>Community</li>
      </ul>

    </div>

    <div className="footer-contact">

      <h3>Contact</h3>

      <p>Email: support@herhub.in</p>

      <p>India</p>

    </div>

  </div>

  <div className="footer-bottom">
    © 2026 HER HUB. All Rights Reserved.
  </div>

</footer>
  </>
);
};

export default Home;
