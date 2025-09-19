import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// Mock AI Agent (can later connect to real LLM or embeddings)
const passionToCareer = {
  cooking: ["Food Blogger", "Cloud Kitchen Founder", "Nutrition Consultant"],
  teaching: ["Online Tutor", "Content Creator", "EdTech Trainer"],
  art: ["Freelance Illustrator", "Digital Artist", "Craft Business"],
  fitness: ["Yoga Instructor", "Wellness Coach", "Personal Trainer"],
};

// YouTube API function
const YOUTUBE_API_KEY = "";

router.post("/explore", async (req, res) => {
  const { passion } = req.body;

  // AI Agent: Suggest professions
  const careers = passionToCareer[passion.toLowerCase()] || [
    "Freelancing",
    "Entrepreneurship",
    "Skill Development",
  ];

  // YouTube Integration
  let videos = [];
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      passion + " tutorials"
    )}&type=video&maxResults=5&key=${YOUTUBE_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    videos = data.items.map((item) => ({
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      videoId: item.id.videoId,
    }));
  } catch (error) {
    console.error("YouTube API Error:", error);
  }

  res.json({ careers, videos });
});

export default router;
