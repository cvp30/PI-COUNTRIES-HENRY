// const Country = require("../models/Country");
const { getAllCountries, getCountriesFound } = require("../utils");



const getCountries = async (req, res) => {
  try {
    const { name } = req.query;

    const countries = name ?
      await getCountriesFound(name)
      :
      await getAllCountries();

    res.json(countries);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getCountries,
}