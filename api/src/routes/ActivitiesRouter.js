const { Router } = require("express");
const { validateActivity } = require("../middlewares/index");
const { createActivity, getActivities } = require("../controllers/ActivitiesController");

const ActivitiesRouter = Router();

ActivitiesRouter.get("/", validateActivity, createActivity);
ActivitiesRouter.post("/", getActivities);

module.exports = ActivitiesRouter;