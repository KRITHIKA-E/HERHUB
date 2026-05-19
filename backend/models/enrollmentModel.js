import {
  DataTypes
} from "sequelize";

import sequelize
from "../database.js";

const Enrollment =
  sequelize.define(

    "Enrollment",

    {

      userId: {

        type:
          DataTypes.INTEGER,

        allowNull: false,
      },

      courseId: {

        type:
          DataTypes.INTEGER,

        allowNull: false,
      },

    },

    {

      tableName:
        "enrollments",
    }
  );

export default Enrollment;