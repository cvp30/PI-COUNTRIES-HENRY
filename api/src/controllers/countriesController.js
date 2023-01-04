const { Country, Activity } = require("../db");
const { getAllCountries, getCountriesByName } = require("../utils");


const getCountries = async (req, res) => {
  try {
    const { name } = req.query;
    const countries = name ? 
                      await getCountriesByName(name) : 
                      await getAllCountries();
    res.json(countries);
    
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const getCountry = async (req, res) => {
  const { id } = req.params;

  try {
    const dataCountry = await Country.findByPk(id.toUpperCase(), {
      include: Activity
    });
  
    res.json({country:dataCountry ? dataCountry.toJSON() : {}});
    
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

module.exports = {
  getCountries,
  getCountry
}