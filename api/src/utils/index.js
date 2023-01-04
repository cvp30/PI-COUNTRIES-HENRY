const { Country, Op } = require("../db");
const axios = require("axios");


const loadCountriesFromAPI = async () => {
  let apiCountries = await axios.get("https://restcountries.com/v3.1/all")
                          .then(response => response.data);
  
  let countries = apiCountries.map(country => {
    return {
      id:         country.cca3,
      name:       country.name.common,
      flag:       country.flags.svg,
      continent:  country.region,
      capital:    country.capital ? country.capital : [],
      subregion:  country.subregion,
      area:       country.area,
      population: country.population
    }
  });
  Country.bulkCreate(countries);
};

const getAllCountries = async () => {
  return Country.findAll({
    attributes: ['id', 'name', 'continent', 'flag', 'population'],
    order: [['name', 'ASC']]
  });
}

const getCountriesByName = async (nameCountry) => {
  return Country.findAll({
    attributes: ['id', 'name', 'continent', 'flag'],
    where: {
      name: { [Op.iLike]: `%${nameCountry}%` }
    },
    order: [['name', 'ASC']]
  });
}


module.exports = {
  loadCountriesFromAPI,
  getAllCountries,
  getCountriesByName
}