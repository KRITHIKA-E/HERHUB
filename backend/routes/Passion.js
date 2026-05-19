import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const passionToCareer = {
  cooking: ["Food Blogger", "Cloud Kitchen Founder", "Nutrition Consultant"],
  teaching: ["Online Tutor", "Content Creator", "EdTech Trainer"],
  art: ["Freelance Illustrator", "Digital Artist", "Craft Business Owner"],
  fitness: ["Yoga Instructor", "Wellness Coach", "Personal Trainer"],
  coding: ["Web Developer", "Software Trainer", "Tech Consultant"],
};

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const normalizeText = (value) => String(value || "").toLowerCase().trim();
const parseTokens = (value) => normalizeText(value).split(/[,;\s]+/).filter(Boolean);

const createFallbackYouTubeVideos = (query) => {
  const queryText = query ? `${query} tutorials` : "career tutorials";
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(queryText)}`;
  return [
    {
      title: `Search YouTube for "${queryText}"`,
      thumbnail: "https://via.placeholder.com/320x180?text=YouTube+Tutorial",
      link: searchUrl,
    },
  ];
};

const createCareerSuggestions = (passion, skills, education) => {
  const passionNorm = normalizeText(passion);
  const skillTokens = parseTokens(skills);
  const educationNorm = normalizeText(education);
  const suggestions = new Set();

  const addSuggestions = (items) => {
    items.forEach((item) => {
      if (item) suggestions.add(item);
    });
  };

  if (passionNorm && passionToCareer[passionNorm]) {
    addSuggestions(passionToCareer[passionNorm]);
  }

  if (passionNorm && !passionToCareer[passionNorm]) {
    const capitalized = passionNorm.charAt(0).toUpperCase() + passionNorm.slice(1);
    addSuggestions([
      `${capitalized} Coach`,
      `${capitalized} Content Creator`,
      `${capitalized} Freelancer`,
      `${capitalized} Consultant`,
    ]);
  }

  const skillBased = {
    communication: ["Corporate Trainer", "Mentor", "Community Manager"],
    teaching: ["Education Consultant", "Online Tutor", "Corporate Trainer"],
    mentoring: ["Mentor", "Career Coach"],
    writing: ["Content Writer", "Copywriter", "Blog Editor"],
    editing: ["Content Editor", "Proofreader"],
    design: ["Creative Designer", "Visual Storyteller"],
    art: ["Creative Designer", "Illustrator"],
    crafting: ["Craft Business Owner", "Product Designer"],
    cooking: ["Recipe Developer", "Food Stylist", "Nutrition Consultant"],
    baking: ["Pastry Chef", "Recipe Developer"],
    coding: ["Web Developer", "Software Trainer", "Technical Consultant"],
    programming: ["Web Developer", "Software Trainer", "Technical Consultant"],
    marketing: ["Brand Strategist", "Social Media Manager", "Content Marketer"],
    sales: ["Sales Consultant", "Business Development Advisor"],
    fitness: ["Wellness Coach", "Lifestyle Advisor", "Personal Trainer"],
    yoga: ["Yoga Instructor", "Wellness Coach"],
    wellness: ["Wellness Coach", "Health Advisor"],
    management: ["Operations Coordinator", "Project Manager", "Business Consultant"],
    administration: ["Office Coordinator", "Virtual Assistant"],
  };

  skillTokens.forEach((token) => {
    if (skillBased[token]) addSuggestions(skillBased[token]);
  });

  if (educationNorm) {
    if (/(master|mba|bachelor|degree|graduate)/.test(educationNorm)) {
      addSuggestions(["Consultant", "Industry Analyst", "Strategy Advisor"]);
    }
    if (/(certificat|diploma)/.test(educationNorm)) {
      addSuggestions(["Specialist", "Certified Trainer", "Technical Instructor"]);
    }
    if (/(high school|secondary)/.test(educationNorm)) {
      addSuggestions(["Support Specialist", "Community Assistant"]);
    }
  }

  if (!suggestions.size) {
    addSuggestions(["Freelancing", "Entrepreneurship", "Skill Development"]);
  }

  return Array.from(suggestions);
};

router.post("/explore", async (req, res) => {
  const { passion, skills, education } = req.body;
  if (!passion && !skills && !education) {
    return res.status(400).json({ message: "Please provide passion, skills, or education." });
  }

  const careers = createCareerSuggestions(passion, skills, education);
  console.log("[Passion.js] /api/passions/explore", { passion, skills, education, careers });
  let videos = [];
  const queryInput = passion || skills || education || "career";

  if (YOUTUBE_API_KEY) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        queryInput + " tutorials"
      )}&type=video&maxResults=6&key=${YOUTUBE_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      const items = data.items || [];

      items.forEach((item) => {
        if (item.id?.videoId) {
          videos.push({
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
            videoId: item.id.videoId,
          });
        }
      });
    } catch (error) {
      console.error("YouTube API Error:", error);
    }
} else {
    console.warn("YouTube API key missing; using fallback video suggestions.");
    videos = createFallbackYouTubeVideos(queryInput);
  }

  if (!videos.length) {
    videos = createFallbackYouTubeVideos(queryInput);
  }

  return res.json({ careers, videos });
});

export default router;

