const { Router } = require("express");
const validateActivity = require("../middlewares");
const { createActivity, getActivities } = require("../controllers/activitiesController");

const activitiesRouter = Router();

activitiesRouter.post("/", validateActivity, createActivity);
activitiesRouter.get("/", getActivities);

module.exports = activitiesRouter;