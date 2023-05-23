const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan('dev'));

server.use('/', async (req, res) => {
  res.json({ sms: "ENTRÓ!!!" })
})

module.exports = server;