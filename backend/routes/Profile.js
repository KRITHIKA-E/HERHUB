import express from "express";

import User from "../models/userModel.js";

import {
  authenticateToken
} from "../middleware/auth.js";

const router = express.Router();


// ======================
// GET USER PROFILE
// ======================

router.get(
  "/:id",

  authenticateToken,

  async (req, res) => {

    try {

      const user =
        await User.findByPk(

          req.params.id,

          {
            attributes: {
              exclude: ["password"],
            },
          }
        );

      if (!user) {

        return res.status(404).json({
          message:
            "User not found",
        });
      }

      res.json(user);

    } catch (err) {

      console.error(
        "Profile fetch error:",
        err
      );

      res.status(500).json({
        message:
          "Error fetching profile",
      });
    }
  }
);


// ======================
// UPDATE USER PROFILE
// ======================

router.put(
  "/:id",

  authenticateToken,

  async (req, res) => {

    try {

      const {

        name,
        city,
        interest,
        language,
        bio,
        skills,

      } = req.body;

      const user =
        await User.findByPk(
          req.params.id
        );

      if (!user) {

        return res.status(404).json({
          message:
            "User not found",
        });
      }

      // AUTHORIZATION CHECK

      if (

        req.user.type !== "user" ||

        req.user.id !== user.id

      ) {

        return res.status(403).json({

          message:
            "You are not authorized to update this profile",

        });
      }

      // UPDATE FIELDS

      if (name !== undefined) {

        user.name = name;
      }

      if (city !== undefined) {

        user.city = city;
      }

      if (interest !== undefined) {

        user.interest = interest;
      }

      if (language !== undefined) {

        user.language = language;
      }

      if (bio !== undefined) {

        user.bio = bio;
      }

      if (skills !== undefined) {

        user.skills = skills;
      }

      await user.save();

      // RETURN UPDATED USER

      const updatedUser =

        await User.findByPk(

          req.params.id,

          {
            attributes: {
              exclude: ["password"],
            },
          }
        );

      res.json(updatedUser);

    } catch (err) {

      console.error(
        "Profile update error:",
        err
      );

      res.status(500).json({

        message:
          "Error updating profile",

      });
    }
  }
);

export default router;