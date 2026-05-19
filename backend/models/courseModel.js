import {
  DataTypes
} from "sequelize";

import sequelize
from "../database.js";

const Course =
  sequelize.define(

    "Course",

    {

      title: {

        type:
          DataTypes.STRING,

        allowNull: false,
      },

      description: {

        type:
          DataTypes.TEXT,

        allowNull: false,
      },

      level: {

        type:
          DataTypes.STRING,

        allowNull: false,
      },

      trainerName: {

        type:
          DataTypes.STRING,

        allowNull: false,
      },

    },

    {

      tableName:
        "courses",
    }
  );

export default Course;