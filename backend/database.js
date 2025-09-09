const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = './database.sqlite';

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to SQLite database.');
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        location TEXT,
        education TEXT,
        passion TEXT,
        number TEXT,
        username TEXT UNIQUE,
        password TEXT
      )`,
      (err) => {
        if (err) {
          console.error('Error creating users table', err.message);
        } else {
          console.log('Users table exists or created successfully.');
        }
      }
    );
  }
});

module.exports = db;
