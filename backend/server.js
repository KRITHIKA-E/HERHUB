const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory user store (replace with DB for production)
const users = [];

app.use(cors());
app.use(bodyParser.json());

// Signup route to create user after phone verification
app.post('/api/signup', async (req, res) => {
  try {
    const { name, age, location, education, passion, phone, username } = req.body;

    // Basic validation
    if (!phone || !username) {
      return res.status(400).json({ message: 'Phone number and username are required' });
    }

    // Check if username or phone already exists
    const userExists = users.find(
      (u) => u.username === username || u.phone === phone
    );
    if (userExists) {
      return res.status(409).json({ message: 'User with this phone or username already exists' });
    }

    // No password since phone OTP verified
    // You can add additional fields or hashing if adding password later

    const newUser = { id: users.length + 1, name, age, location, education, passion, phone, username };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error, try again later' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
