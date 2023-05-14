import { Router } from "express";
import { validateActivity } from "../middlewares/index.js"
import { createActivity, getActivities } from "../controllers/ActivitiesController.js";

const activitiesRouter = Router();

activitiesRouter.post("/", validateActivity, createActivity);
activitiesRouter.get("/", getActivities);

export default activitiesRouter;