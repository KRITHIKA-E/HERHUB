const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const { createUser, findUserByUsername } = require('../models/userModel');

const JWT_SECRET = process.env.JWT_SECRET || 'changethisstupid';

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// In-memory OTP store
const otpStore = new Map();

// Send OTP email
router.post('/send-otp', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(email, { otp, expires: Date.now() + 5 * 60 * 1000 });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your HER HUB OTP Code',
    text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
  };

 transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending OTP email:', error);  // Detailed error log
    return res.status(500).json({ message: `Failed to send OTP email: ${error.message}` });
  }
  console.log('OTP email sent:', info.response);
  res.json({ message: 'OTP sent to email' });
});


});

// Verify OTP and create user
router.post('/verify-otp', (req, res) => {
  const { email, otp, userData } = req.body;

  if (!email || !otp || !userData) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const record = otpStore.get(email);
  if (!record) return res.status(400).json({ message: 'OTP not sent or expired' });

  if (record.expires < Date.now()) {
    otpStore.delete(email);
    return res.status(400).json({ message: 'OTP expired' });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  otpStore.delete(email);

  findUserByUsername(userData.username, (err, user) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (user) return res.status(409).json({ message: 'Username already exists' });

    createUser(userData, (err, id) => {
      if (err) return res.status(500).json({ message: 'User creation failed' });
      res.json({ message: 'User registered successfully', userId: id });
    });
  });
});

module.exports = router;
