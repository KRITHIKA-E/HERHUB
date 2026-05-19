import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

import {
  authenticateToken,
} from "../middleware/auth.js";

const router = express.Router();

const jwtSecret =
  process.env.JWT_SECRET ||
  "default_jwt_secret";


// CREATE JWT TOKEN

const createToken = (user) => {

  return jwt.sign(

    {
      id: user.id,
      name: user.name,
      type: "user",
    },

    jwtSecret,

    {
      expiresIn: "7d",
    }
  );
};


// =======================
// SIGNUP
// =======================

router.post(
  "/signup",

  async (req, res) => {

    console.log(
      "SIGNUP BODY:",
      req.body
    );

    const {
      name,
      email,
      password,
      city,
      interest,
      language,
    } = req.body;

    // VALIDATION

    if (
      !name ||
      !email ||
      !password
    ) {

      return res.status(400).json({
        message:
          "Please provide all required fields.",
      });
    }

    try {

      // CHECK EXISTING USER

      const existingUser =
        await User.findOne({
          where: { email },
        });

      console.log(
        "EXISTING USER:",
        existingUser
      );

      if (existingUser) {

        return res.status(409).json({
          message:
            "User already exists.",
        });
      }

      // HASH PASSWORD

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      console.log(
        "HASHED PASSWORD:",
        hashedPassword
      );

      // CREATE USER

      const newUser =
        await User.create({

          name,
          email,
          password: hashedPassword,
          city,
          interest,
          language,

        });

      console.log(
        "NEW USER CREATED:",
        newUser.toJSON()
      );

      // CREATE TOKEN

      const token =
        createToken(newUser);

      // REMOVE PASSWORD

      const userPayload =
        newUser.get({
          plain: true,
        });

      delete userPayload.password;

      // SUCCESS

      res.status(201).json({

        message:
          "Signup successful!",

        user: userPayload,

        token,

      });

    } catch (error) {

      console.error(
        "SIGNUP ERROR:",
        error
      );

      res.status(500).json({

        message:
          "Signup failed!",

        error:
          error.message,

      });
    }
  }
);


// =======================
// LOGIN
// =======================

router.post(
  "/login",

  async (req, res) => {

    console.log(
      "LOGIN BODY:",
      req.body
    );

    const {
      email,
      password,
    } = req.body;

    // VALIDATION

    if (
      !email ||
      !password
    ) {

      return res.status(400).json({
        message:
          "Please provide email and password.",
      });
    }

    try {

      // FIND USER

      const user =
        await User.findOne({
          where: { email },
        });

      console.log(
        "FOUND USER:",
        user
      );

      if (!user) {

        return res.status(401).json({
          message:
            "Invalid credentials.",
        });
      }

      // CHECK PASSWORD

      const passwordMatches =
        await bcrypt.compare(
          password,
          user.password
        );

      console.log(
        "PASSWORD MATCH:",
        passwordMatches
      );

      if (!passwordMatches) {

        return res.status(401).json({
          message:
            "Invalid credentials.",
        });
      }

      // CREATE TOKEN

      const token =
        createToken(user);

      // REMOVE PASSWORD

      const userPayload =
        user.get({
          plain: true,
        });

      delete userPayload.password;

      // SUCCESS

      res.json({

        message:
          "Login successful!",

        user: userPayload,

        token,

      });

    } catch (error) {

      console.error(
        "LOGIN ERROR:",
        error
      );

      res.status(500).json({

        message:
          "Login failed!",

        error:
          error.message,

      });
    }
  }
);


// =======================
// CURRENT USER
// =======================

router.get(
  "/me",

  authenticateToken,

  async (req, res) => {

    try {

      const user =
        await User.findByPk(
          req.user.id,
          {
            attributes: {
              exclude: ["password"],
            },
          }
        );

      if (!user) {

        return res.status(404).json({
          message:
            "User not found.",
        });
      }

      res.json({
        user,
      });

    } catch (error) {

      console.error(
        "AUTH ME ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Failed to fetch user.",
      });
    }
  }
);

export default router;