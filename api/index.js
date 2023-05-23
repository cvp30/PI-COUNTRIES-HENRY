const server = require('./src/app');
require("dotenv").config();
const { PORT } = process.env;

const port = PORT || 3001;


server.listen(port, () => {
  console.log('listening on port %s', port);
})