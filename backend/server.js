import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import sequelize from "./database.js";
import authRoutes from "./routes/auth.js";
import hirerRoutes from "./routes/hirer.js";
import jobsRoutes from "./routes/jobs.js";
import passionsRoutes from "./routes/Passion.js";
import profileRoutes from "./routes/Profile.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/passions", passionsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/hirer", hirerRoutes);
app.use("/api/jobs", jobsRoutes);
console.log("[server.js] Mounted job routes at /api/jobs");
app.use("/api/profile", profileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// DB sync
// DB sync

sequelize
  .sync()

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

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
