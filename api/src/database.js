const { Sequelize } = require("sequelize");
require("dotenv").config();
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
} = process.env;

const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    native: false,
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    }
  }
)

module.exports = sequelize;
