

const getCountries = async (req, res) => {
  res.json({ sms: "countries" })
}

module.exports = {
  getCountries,
}