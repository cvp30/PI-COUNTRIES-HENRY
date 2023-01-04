const { Country, Activity } = require("../db");

const createActivity = async (req, res) => {
  const { name, difficulty, duration, season, idCountries } = req.body;

  try {
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season
    });

    idCountries.forEach(async id => {
      const country = await Country.findByPk(id);
      // if(!country) return res.status(404).json({error: "Country not found"});
      await newActivity.addCountry(country);
    })
    return res.json("activity created!!!");

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getActivities = async(req, res) => {
  try {
    const allActivities = await Activity.findAll({
      include: {
        model: Country,
        attributes: ['id', 'name', 'continent', 'flag', 'population' ]
      }
    });

    res.json(allActivities);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createActivity,
  getActivities
}