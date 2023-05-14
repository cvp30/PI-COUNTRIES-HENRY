import { Router } from "express";
import { getCountries, getCountry } from "../controllers/countriesController.js";

const countriesRouter = Router();

countriesRouter.get('/', getCountries);
countriesRouter.get('/:id', getCountry);

export default countriesRouter;