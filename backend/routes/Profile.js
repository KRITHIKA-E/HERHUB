// routes/profile.js
import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// Fetch user profile
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// Update profile (bio, skills, verification status by admin)
router.put("/:id", async (req, res) => {
  try {
    const { bio, skills } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.bio = bio || user.bio;
    user.skills = skills || user.skills;
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error updating profile" });
  }
});

export default router;
