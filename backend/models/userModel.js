const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const createUser = (user, callback) => {
  bcrypt.hash(user.password, saltRounds, (err, hashedPassword) => {
    if (err) return callback(err);

    const sql = `
      INSERT INTO users (name, age, location, education, passion, number, username, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      user.name,
      user.age,
      user.location,
      user.education,
      user.passion,
      user.number,
      user.username,
      hashedPassword,
    ];
    db.run(sql, params, function(err) {
      callback(err, this.lastID);
    });
  });
};

const findUserByUsername = (username, callback) => {
  const sql = `SELECT * FROM users WHERE username = ?`;
  db.get(sql, [username], (err, row) => {
    callback(err, row);
  });
};

module.exports = { createUser, findUserByUsername };
