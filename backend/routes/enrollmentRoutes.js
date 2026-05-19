import express
from "express";

import Enrollment
from "../models/enrollmentModel.js";

import Course
from "../models/courseModel.js";

const router =
  express.Router();


// CREATE ENROLLMENT

router.post(
  "/",
  async (req, res) => {

    try {

      const {
        userId,
        courseId,
      } = req.body;

      // CHECK EXISTING

      const existing =
        await Enrollment.findOne({

          where: {

            userId,
            courseId,

          },
        });

      if (existing) {

        return res.status(400).json({

          message:
            "Already enrolled",

        });
      }

      const enrollment =
        await Enrollment.create({

          userId,
          courseId,

        });

      res.status(201).json(
        enrollment
      );

    } catch (error) {

      console.error(error);

      res.status(500).json({

        message:
          "Enrollment failed",

      });
    }
  }
);


// GET USER ENROLLMENTS

router.get(
  "/:userId",
  async (req, res) => {

    try {

      Enrollment.belongsTo(
        Course,
        {
          foreignKey:
            "courseId",
        }
      );

      const enrollments =
        await Enrollment.findAll({

          where: {

            userId:
              req.params.userId,

          },

          include: [
            Course,
          ],

        });

      res.json(
        enrollments
      );

    } catch (error) {

      console.error(error);

      res.status(500).json({

        message:
          "Failed to fetch enrollments",

      });
    }
  }
);

export default router;