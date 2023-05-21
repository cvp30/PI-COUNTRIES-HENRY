const { Router } = require("express");
const { validateActivity } = require("../middlewares/index")
const { createActivity, getActivities } = require("../controllers/ActivitiesController");

const activitiesRouter = Router();

activitiesRouter.post("/", validateActivity, createActivity);
activitiesRouter.get("/", getActivities);

module.exports = activitiesRouter;