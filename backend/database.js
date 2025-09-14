import { Sequelize } from "sequelize";

// Using SQLite (file-based DB)
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // DB file will be created here
  logging: false,
});

export default sequelize;
