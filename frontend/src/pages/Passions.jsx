import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const categories = [
  { name: "Art & Craft", img: "public/images/Art.jpg" },
  { name: "Cooking" },
  { name: "Coding", img: "public/images/coding.jpg" },
  { name: "Fitness" },
];

const Passions = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [inputValue, setInputValue] = useState(user?.passion || "");
  const [loading, setLoading] = useState(false);
  const [careers, setCareers] = useState([]);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = "AIzaSyBaYEJY2dxPyuhsbyAAe9a8sgLo8OoM58A"; // Replace with your key

  const handleExplore = async (passionQuery) => {
    const query = `${(passionQuery || "").trim()} tutorial`; // append 'tutorial' for better results
    if (!query.trim()) {
      setError("Please enter or select a passion to explore.");
      return;
    }
    setError("");
    setLoading(true);
    setCareers([]);
    setVideos([]);

    const fallbackVideos = [
      {
        title: `Beginner ${(passionQuery || "").trim()} Tutorial`,
        thumbnail:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa7?q=80&w=400&auto=format&fit=crop",
        link: "#",
      },
      {
        title: `${(passionQuery || "").trim()} Tips & Tricks`,
        thumbnail:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=400&auto=format&fit=crop",
        link: "#",
      },
    ];

    try {
      const youtubeRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          query
        )}&type=video&maxResults=6&key=${API_KEY}`
      );
      const youtubeData = await youtubeRes.json();
      console.log("YouTube API response:", youtubeData);

      const dynamicVideos =
        (youtubeData.items || [])
          .filter((item) => item.id.videoId)
          .map((item) => ({
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          })) || [];

      setVideos(dynamicVideos.length ? dynamicVideos : fallbackVideos);

      const mockCareers = [
        `${(passionQuery || "").trim()} Coach`,
        `${(passionQuery || "").trim()} Content Creator`,
        `${(passionQuery || "").trim()} Freelancer`,
      ];
      setCareers(mockCareers);
    } catch (err) {
      console.warn("YouTube API error:", err);
      setVideos(fallbackVideos);

      const mockCareers = [
        `${(passionQuery || "").trim()} Coach`,
        `${(passionQuery || "").trim()} Content Creator`,
        `${(passionQuery || "").trim()} Freelancer`,
      ];
      setCareers(mockCareers);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.passion) {
      handleExplore(user.passion);
      setInputValue(user.passion);
    }
  }, [user?.passion]);

  return (
    <div className="passion-page">
      <div className="passion-bg-image" />

      <div className="passion-container">
        <header className="passion-hero">
          <h1 className="hero-title">Explore Your Passion</h1>
          <p className="hero-subtitle">
            Hi <strong>{user?.name || "there"}</strong> — find learning paths,
            jobs and practical steps to turn your passion into a profession.
          </p>
        </header>

        <div className="passion-explore-card">
          <div className="explore-row">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                user?.passion
                  ? `e.g. ${user.passion}`
                  : "Type a passion (Cooking, Art, Teaching...)"
              }
              className="entrance-input explore-input"
            />
            <button
              className="enter-btn ripple explore-btn"
              onClick={() => handleExplore(inputValue)}
            >
              Get Suggestions
            </button>
          </div>

          <div className="category-row">
            {categories.map((c) => (
              <button
                key={c.name}
                className="category-pill"
                onClick={() => {
                  setInputValue(c.name.split(" ")[0]);
                  handleExplore(c.name.split(" ")[0]);
                }}
              >
                {c.img && <img src={c.img} alt={c.name} className="category-thumb" />}
                <span>{c.name}</span>
              </button>
            ))}
          </div>

          {error && <p className="error-text">{error}</p>}
        </div>

        <section className="passion-results">
          {loading && <p className="loading-text">✨ Fetching suggestions…</p>}

          {!loading && careers.length > 0 && (
            <>
              <h2 className="section-title">Suggested Career Paths</h2>
              <div className="results-grid">
                {careers.map((c, i) => (
                  <div className="result-card" key={i}>
                    <h3>{c}</h3>
                    <p>
                      Short description about why {c} is a good fit and next
                      first steps.
                    </p>
                    <div className="card-actions">
                      <button
                        className="quick-link-btn"
                        onClick={() => navigate("/resources")}
                      >
                        Learn
                      </button>
                      <button
                        className="quick-link-btn"
                        onClick={() => navigate("/jobs")}
                      >
                        Find Jobs
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {!loading && videos.length > 0 && (
            <>
              <h2 className="section-title">Learning Videos</h2>
              <div className="video-grid">
                {videos.map((v, i) => (
                  <a
                    key={i}
                    className="video-card"
                    href={v.link || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={v.thumbnail} alt={v.title} />
                    <p>{v.title}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Passions;
