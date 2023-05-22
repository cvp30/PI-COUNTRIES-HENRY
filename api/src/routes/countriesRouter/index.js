const { Router } = require('express');

const { getCountries } = require('../../controllers/CountriesController');

const countriesRouter = Router();

countriesRouter.get('/', getCountries);

module.exports = countriesRouter;