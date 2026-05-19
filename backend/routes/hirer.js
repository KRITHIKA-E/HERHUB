import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Hirer from "../models/hirerModel.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET || "default_jwt_secret";

const createToken = (hirer) =>
  jwt.sign(
    { id: hirer.id, companyName: hirer.companyName, email: hirer.email, type: "hirer" },
    jwtSecret,
    { expiresIn: "7d" }
  );

router.post("/signup", async (req, res) => {
  const { companyName, email, password, description } = req.body;

  if (!companyName || !email || !password) {
    return res.status(400).json({ message: "Company name, email, and password are required." });
  }

  try {
    const existingHirer = await Hirer.findOne({ where: { email } });
    if (existingHirer) {
      return res.status(409).json({ message: "Email is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newHirer = await Hirer.create({
      companyName,
      email,
      password: hashedPassword,
      description: description || "",
    });

    const token = createToken(newHirer);
    const hirerPayload = newHirer.get({ plain: true });
    delete hirerPayload.password;

    res.status(201).json({ message: "Hirer signup successful!", hirer: hirerPayload, token });
  } catch (error) {
    console.error("Hirer signup error:", error);
    res.status(500).json({ message: "Hirer signup failed.", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const hirer = await Hirer.findOne({ where: { email } });
    if (!hirer) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const passwordMatches = await bcrypt.compare(password, hirer.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = createToken(hirer);
    const hirerPayload = hirer.get({ plain: true });
    delete hirerPayload.password;

    res.json({ message: "Hirer login successful!", hirer: hirerPayload, token });
  } catch (error) {
    console.error("Hirer login error:", error);
    res.status(500).json({ message: "Hirer login failed.", error: error.message });
  }
});

router.get("/me", authenticateToken, async (req, res) => {
  try {
    const hirer = await Hirer.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });
    if (!hirer) return res.status(404).json({ message: "Hirer not found." });
    res.json({ hirer });
  } catch (error) {
    console.error("Hirer me error:", error);
    res.status(500).json({ message: "Failed to fetch hirer." });
  }
});

export default router;
