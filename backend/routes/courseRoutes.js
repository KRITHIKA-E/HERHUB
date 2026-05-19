import express
from "express";

import Course
from "../models/courseModel.js";

const router =
  express.Router();


// CREATE COURSE

router.post(
  "/",
  async (req, res) => {

    try {

      const {
        title,
        description,
        level,
        trainerName,
      } = req.body;

      const course =
        await Course.create({

          title,
          description,
          level,
          trainerName,

        });

      res.status(201).json(
        course
      );

    } catch (error) {

      console.error(error);

      res.status(500).json({

        message:
          "Course creation failed",

      });
    }
  }
);


// GET COURSES

router.get(
  "/",
  async (req, res) => {

    try {

      const courses =
        await Course.findAll({

          order: [
            ["id", "DESC"],
          ],

        });

      res.json(courses);

    } catch (error) {

      console.error(error);

      res.status(500).json({

        message:
          "Failed to fetch courses",

      });
    }
  }
);


// DELETE COURSE

router.delete(
  "/:id",
  async (req, res) => {

    try {

      await Course.destroy({

        where: {
          id:
            req.params.id,
        },

      });

      res.json({

        message:
          "Course deleted",

      });

    } catch (error) {

      console.error(error);

      res.status(500).json({

        message:
          "Delete failed",

      });
    }
  }
);

export default router;