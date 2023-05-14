import { Router } from "express";

import countriesRouter from "./CountriesRouter.js";
import activitiesRouter from "./ActivitiesRouter.js";

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);


export default router;