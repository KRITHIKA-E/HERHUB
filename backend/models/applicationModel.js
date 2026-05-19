import { DataTypes }
from "sequelize";

import sequelize
from "../database.js";

const Application =
  sequelize.define(

    "Application",

    {

      jobId: {

        type:
          DataTypes.INTEGER,

        allowNull: false,

      },

      userId: {

        type:
          DataTypes.INTEGER,

        allowNull: false,

      },

    },

    {

      timestamps: true,

      tableName:
        "applications",

    }
  );

export default Application;