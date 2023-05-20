const { Router } = require("express");
const { validateActivity } = require("../middlewares/index.js")
const { createActivity, getActivities } = require("../controllers/ActivitiesController.js");

const activitiesRouter = Router();

activitiesRouter.post("/", validateActivity, createActivity);
activitiesRouter.get("/", getActivities);

module.exports = activitiesRouter;