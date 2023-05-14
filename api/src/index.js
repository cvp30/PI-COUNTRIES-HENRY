import server from './app.js'
import { sequelize } from './database/database.js';

import "./models/Country.js"
import "./models/Activity.js"
import "./models/CountryActivity.js"

import { loadAllCountries } from './utils/index.js';

async function main() {
  try {
    await sequelize.sync({ force: true }).then(() => {

      loadAllCountries();

      server.listen(3001, () => {
        console.log('Server is listening on port 3001');
      });
    })
  } catch (error) {
    console.log("unable to connet to the DB", error);
  }
}

main();

