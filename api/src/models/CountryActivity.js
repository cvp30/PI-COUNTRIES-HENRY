const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const CountryActivity = sequelize.define('country_activity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  }
})

const { country, activity } = sequelize.models;

country.belongsToMany(activity, { through: CountryActivity });
activity.belongsToMany(country, { through: CountryActivity });

module.exports = CountryActivity;