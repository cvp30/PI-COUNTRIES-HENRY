const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const Country = sequelize.define('country', {
  id: {
    type: DataTypes.STRING(3),
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  flag: {
    type: DataTypes.STRING,
    allowNull: false
  },

  continent: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  capital: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },

  subregion: {
    type: DataTypes.STRING,
  },

  area: {
    type: DataTypes.FLOAT,
  },

  population: {
    type: DataTypes.INTEGER
  }
})

module.exports = Country;