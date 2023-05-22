const server = require('./src/app');
const { sequelize } = require('./src/database/database');
// const { loadAllCountries } = require('./src/utils/index');
require('./src/models/Activity');
require('./src/models/Country');
require('./src/models/CountryActivity');
require("dotenv").config();
const { PORT } = process.env;

async function main() {
  try {
    await sequelize.sync({ force: true }).then(() => {

      // loadAllCountries();

      server.listen(PORT, () => {
        console.log('Server is listening on port %s', PORT);
      });
    })
  } catch (error) {
    console.log("unable to connet to the DB", error);
  }
}

main();