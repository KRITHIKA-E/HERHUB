import express from "express";

import Job from "../models/jobModel.js";
import Hirer from "../models/hirerModel.js";
import Application
from "../models/applicationModel.js";
const router = express.Router();

console.log(
  "[jobs.js] Jobs route module loaded"
);


// RELATIONSHIPS

Job.belongsTo(Hirer, {
  foreignKey: "hirerId",
});

Hirer.hasMany(Job, {
  foreignKey: "hirerId",
});


// ======================
// CREATE JOB
// ======================

router.post("/", async (req, res) => {

  console.log(
    "[jobs.js] POST /api/jobs called"
  );

  try {

    const {
      title,
      description,
      location,
      hirerId,
    } = req.body;

    const job =
      await Job.create({

        title,
        description,
        location,
        hirerId,

      });

    res.status(201).json(job);

  } catch (error) {

    console.error(
      "JOB CREATE ERROR:",
      error
    );

    res.status(500).json({

      message:
        "Failed to create job.",

      error:
        error.message,

    });
  }
});


// ======================
// GET ALL JOBS
// ======================

router.get("/", async (req, res) => {

  console.log(
    "[jobs.js] GET /api/jobs called"
  );

  try {

    const jobs =
      await Job.findAll({

        include: [

          {
            model: Hirer,
            attributes: [
              "companyName",
            ],
          },

        ],

        order: [
          ["id", "DESC"],
        ],

      });

    const formatted =
      jobs.map((job) => ({

        id: job.id,

        title: job.title,

        description:
          job.description,

        location:
          job.location,

        hirerId:
          job.hirerId,

        companyName:
          job.Hirer
            ?.companyName || "",

      }));

    res.json(formatted);

  } catch (error) {

    console.error(
      "JOB FETCH ERROR:",
      error
    );

    res.status(500).json({

      message:
        "Failed to load jobs.",

      error:
        error.message,

    });
  }
});


// ======================
// GET MY JOBS
// ======================

router.get("/mine", async (req, res) => {

  try {

    const jobs =
      await Job.findAll({

        order: [
          ["id", "DESC"],
        ],

      });

    res.json(jobs);

  } catch (error) {

    console.error(
      "MY JOBS ERROR:",
      error
    );

    res.status(500).json({

      message:
        "Failed to load jobs.",

      error:
        error.message,

    });
  }
});
// APPLY TO JOB

router.post(

  "/apply",

  async (req, res) => {

    try {

      const {
        jobId,
        userId,
      } = req.body;

      // CHECK EXISTING

      const existing =
        await Application.findOne({

          where: {
            jobId,
            userId,
          },

        });

      if (existing) {

        return res.status(400).json({

          message:
            "Already applied",

        });
      }

      // CREATE APPLICATION

      const application =
        await Application.create({

          jobId,
          userId,

        });

      res.status(201).json({

        message:
          "Application submitted",

        application,

      });

    } catch (error) {

      console.error(
        "APPLICATION ERROR:",
        error
      );

      res.status(500).json({

        message:
          "Application failed",

      });
    }
  }
);
export default router;