import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { name, age, passion, education, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { name } });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = await User.create({ name, age, passion, education, password });
    res.status(201).json({ message: "Signup successful!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Signup failed!", error });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ where: { name, password } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful!", user });
  } catch (error) {
    res.status(500).json({ message: "Login failed!", error });
  }
});

export default router;
