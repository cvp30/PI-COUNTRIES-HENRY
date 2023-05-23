const Country = require("../models/Country");
const Activity = require("../models/Activity");
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

const getCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await Country.findByPk(id.toUpperCase(), {
      include: Activity
    });

    res.json({ country: country ?? {} })

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getCountries,
  getCountry,
}