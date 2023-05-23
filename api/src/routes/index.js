const { Router } = require("express");

const countriesRouter = require("./CountriesRouter");

const router = Router();

router.use("/countries", countriesRouter);

module.exports = router;