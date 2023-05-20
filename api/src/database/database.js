require("dotenv").config();
const { Sequelize } = require('sequelize');
const { DB_DEPLOY } = process.env;

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });
// postgresql://postgres:iInLVkQfeKlOL0jcKb0C@containers-us-west-91.railway.app:7762/railway
const sequelize = new Sequelize(
  DB_DEPLOY,
  {
    native: false,
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    }
  }

  // "railway",
  // "postgres",
  // "iInLVkQfeKlOL0jcKb0C",

  // {
  //   host: "containers-us-west-91.railway.app",
  //   port: 7762,
  //   dialect: "postgres",
  //   native: false,
  //   logging: false,
  //   define: {
  //     freezeTableName: true,
  //     timestamps: false,
  //   }
  // }

  // "countries",
  // "postgres",
  // "1111",
  // {
  //   host: "localhost",
  //   dialect: "postgres",
  //   native: false,
  //   define: {
  //     freezeTableName: true,
  //     timestamps: false,
  //   }
  // }
)

module.exports = {
  sequelize
}