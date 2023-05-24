const { Router } = require("express");
const { validateActivity } = require("../middlewares/index");
const { createActivity, getActivities } = require("../controllers/ActivitiesController");

const ActivitiesRouter = Router();

ActivitiesRouter.get("/", getActivities);
ActivitiesRouter.post("/", validateActivity, createActivity);

module.exports = ActivitiesRouter;