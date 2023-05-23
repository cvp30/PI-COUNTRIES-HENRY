const server = require('./src/app');
const { sequelize } = require('./src/database/database');
const { loadAllCountries } = require('./src/utils/index');
require('./src/models/Activity');
require('./src/models/Country');
require('./src/models/CountryActivity');
require("dotenv").config();
const { PORT } = process.env;

const port = PORT || 3000;

async function main() {
  try {
    await sequelize.sync({ force: true }).then(() => {

      loadAllCountries();

      server.listen(port, () => {
        console.log('Server is listening on port %s', port);
      });
    })
  } catch (error) {
    console.log("unable to connet to the DB", error);
  }
}

main();