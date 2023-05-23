const { getCountries } = require("../controllers/CountriesController")
const { Router } = require("express")

const countriesRouter = Router();

countriesRouter.get('/', getCountries);

module.exports = countriesRouter;