const validateActivity = (req, res, next) => {
  const { name, difficulty, duration, season, idCountries } = req.body;

  if (!name) return res.status(400).json({ error: "missing name" });
  if (!difficulty) return res.status(400).json({ error: "missing difficulty" });
  if (!duration) return res.status(400).json({ error: "missing duration" });
  if (!season) return res.status(400).json({ error: "missing season" });
  if (!idCountries) return res.status(400).json({ error: "missing countries" });
  next();
};

module.exports = {
  validateActivity
}