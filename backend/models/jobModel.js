import { DataTypes } from "sequelize";

import sequelize from "../database.js";

const Job = sequelize.define(

  "Job",

  {

    title: {

      type: DataTypes.STRING,

      allowNull: false,

    },

    description: {

      type: DataTypes.TEXT,

      allowNull: false,

    },

    location: {

      type: DataTypes.STRING,

      allowNull: true,

    },

    requiredSkills: {

      type: DataTypes.STRING,

      allowNull: true,

    },

    hirerId: {

      type: DataTypes.INTEGER,

      allowNull: true,

    },

  },

  {

    timestamps: true,

    tableName: "jobs",

  }
);

export default Job;