import express
from "express";

import Course
from "../models/courseModel.js";

import Enrollment
from "../models/enrollmentModel.js";

const router =
  express.Router();


// GET ANALYTICS

router.get(
  "/",
  async (req, res) => {

    try {

      const totalCourses =
        await Course.count();

      const totalEnrollments =
        await Enrollment.count();

      const uniqueLearners =
        await Enrollment.count({

          distinct: true,

          col: "userId",

        });

      res.json({

        totalCourses,

        totalEnrollments,

        uniqueLearners,

      });

    } catch (error) {

      console.error(
        error
      );

      res.status(500).json({

        message:
          "Analytics fetch failed",

      });
    }
  }
);

export default router;