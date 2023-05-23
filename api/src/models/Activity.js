const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Activity = sequelize.define('activity', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  // 1 - 5
  difficulty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },

  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  season: {
    type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
    allowNull: false,
  },
})

module.exports = Activity;