import dotenv from "dotenv";

import express from "express";

import cors from "cors";

import sequelize
from "./database.js";

import authRoutes
from "./routes/auth.js";

import hirerRoutes
from "./routes/hirer.js";

import jobsRoutes
from "./routes/jobs.js";

import passionsRoutes
from "./routes/Passion.js";

import profileRoutes
from "./routes/Profile.js";

import courseRoutes
from "./routes/courseRoutes.js";

import enrollmentRoutes
from "./routes/enrollmentRoutes.js";

import analyticsRoutes
from "./routes/analyticsRoutes.js";

dotenv.config();

const app =
  express();


// MIDDLEWARE

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


// ROUTES

app.use(
  "/api/passions",
  passionsRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/hirer",
  hirerRoutes
);

app.use(
  "/api/jobs",
  jobsRoutes
);

app.use(
  "/api/profile",
  profileRoutes
);

app.use(
  "/api/courses",
  courseRoutes
);

app.use(
  "/api/enrollments",
  enrollmentRoutes
);
app.use(
  "/api/analytics",
  analyticsRoutes
);

console.log(
  "[server.js] Mounted routes successfully"
);


// TEST ROUTE

app.get(
  "/",
  (req, res) => {

    res.send(
      "Backend running..."
    );
  }
);


// DATABASE SYNC

sequelize.sync()

  .then(() => {

    console.log(
      "✅ Database connected and synced"
    );

  })

  .catch((err) => {

    console.error(
      "Database sync failed:",
      err
    );

  });


// 404 HANDLER

app.use(
  (req, res) => {

    res.status(404).json({

      message:
        "Route not found",

    });
  }
);


// ERROR HANDLER

app.use(
  (err, req, res, next) => {

    console.error(
      err.stack
    );

    res.status(500).json({

      message:
        "Internal server error",

    });
  }
);


const PORT =
  process.env.PORT || 5000;

app.listen(
  PORT,
  () =>

    console.log(
      `🚀 Server running on port ${PORT}`
    )
);