import { Country } from "../models/Country.js";
import { Activity } from "../models/Activity.js";
import { getCountriesFound, getAllCountries } from "../utils/index.js";

export const getCountries = async (req, res) => {
  try {
    const { name } = req.query;

    const countries = name ?
      await getCountriesFound(name)
      :
      await getAllCountries();
    // console.log(countries)
    res.json(countries);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const getCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await Country.findByPk(id.toUpperCase(), {
      include: Activity
    });

    res.json({ country: country ?? {} })

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}