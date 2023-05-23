const { Router } = require("express");
const countriesRouter = require("./CountriesRouter");
const activitiesRouter = require("./ActivitiesRouter");

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;