const { Router } = require("express");

const countriesRouter = require('./CountriesRouter.js');
// const activitiesRouter = require("./ActivitiesRouter.js");

const router = Router();

router.use("/countries", countriesRouter);
// router.use("/activities", activitiesRouter);

module.exports = router;