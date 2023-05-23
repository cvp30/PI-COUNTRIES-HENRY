const axios = require("axios");
const Country = require("../models/Country");
const { Op } = require('sequelize');


const loadAllCountries = async () => {
  const apiCountries = await axios.get("https://restcountries.com/v3.1/all")
    .then(response => response.data);

  const countries = apiCountries.map(country => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.png,
      continent: country.region,
      capital: country.capital ? country.capital : [],
      subregion: country.subregion,
      area: country.area,
      population: country.population
    }
  });

  Country.bulkCreate(countries);
}

const getAllCountries = async () => {
  const attributes = ['id', 'name', 'continent', 'flag', 'population'];
  const order = [['name', 'ASC']];

  return Country.findAll({
    attributes: attributes,
    order: order,
  })
}

const getCountriesFound = async (name) => {

  const attributes = ['id', 'name', 'continent', 'flag', 'population'];
  const order = [['name', 'ASC']];

  return Country.findAll({
    attributes: attributes,
    order: order,
    where: {
      name: { [Op.iLike]: `%${name}%` }
    }
  })
}

module.exports = {
  loadAllCountries,
  getAllCountries,
  getCountriesFound,
}