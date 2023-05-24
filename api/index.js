require('./src/models/Country');
require('./src/models/Activity');
require('./src/models/CountryActivity');

const server = require('./src/app');
const sequelize = require("./src/database")
const { loadAllCountries } = require("./src/utils/index");
require("dotenv").config();
const { PORT } = process.env;


const port = PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  loadAllCountries();

  server.listen(port, () => {
    console.log('listening on port %s', port);
  })
})
