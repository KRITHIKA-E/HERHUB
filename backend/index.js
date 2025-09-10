const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy database (for now)
let users = [];

// SIGNUP API
app.post("/api/signup", (req, res) => {
  const { name, age, passion, education, password } = req.body;

  const existingUser = users.find((u) => u.name === name);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ name, age, passion, education, password });
  res.status(201).json({ message: "Signup successful!" });
});

// LOGIN API
app.post("/api/login", (req, res) => {
  const { name, password } = req.body;

  const user = users.find((u) => u.name === name && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful!" });
});

// Start server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
