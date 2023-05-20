import Sequelize from 'sequelize';
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

// TIPO_DB :// USER   :     PASSWORD        @ HOST      : PORT / DB_NAME
// postgresql://postgres:iInLVkQfeKlOL0jcKb0C@containers-us-west-91.railway.app:7762/railway

export const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    native: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    }
  }
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