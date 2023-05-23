const { Router } = require("express")
const { getCountries, getCountry } = require("../controllers/CountriesController")

const countriesRouter = Router();

countriesRouter.get('/', getCountries);
countriesRouter.get('/:id', getCountry);

module.exports = countriesRouter;