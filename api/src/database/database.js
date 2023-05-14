import Sequelize from 'sequelize';

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

export const sequelize = new Sequelize(
  "countries",
  "postgres",
  "1111",
  {
    host: "localhost",
    dialect: "postgres",
    native: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    }
  }
)