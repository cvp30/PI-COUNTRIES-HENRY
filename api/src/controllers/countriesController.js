const Country = require("../models/Country.js");
const Activity = require("../models/Activity.js");
const { getCountriesFound, getAllCountries } = require("../utils/index.js");

const getCountries = async (req, res) => {
  res.json({ sms: "hola" });
  // try {
  //   const { name } = req.query;

  //   const countries = name ?
  //     await getCountriesFound(name)
  //     :
  //     await getAllCountries();
  //   // console.log(countries)
  //   res.json(countries);

  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
}

// const getCountry = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const country = await Country.findByPk(id.toUpperCase(), {
//       include: Activity
//     });

//     res.json({ country: country ?? {} })

//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

module.exports = {
  getCountries,
  // getCountry
}