import express from "express";
import cors from "cors";
import sequelize from "./database.js";
import authRoutes from "./routes/auth.js"; // make sure auth.js is in routes folder
import passionsRoutes from "./routes/Passion.js";



const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/passions", passionsRoutes);
// 🔹 Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// DB sync
sequelize.sync().then(() => console.log("✅ Database connected and synced"));

// Server start
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
