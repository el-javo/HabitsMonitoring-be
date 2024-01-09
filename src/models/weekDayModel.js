"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("@config/sequelize.config");

const weekDayModel = sequelize.define(
  "weekDay",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIcrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timeStamps: false }
);

weekDayModel.associate = function () {
  const model = (modelName) => this.sequelize.model(modelName);

  this.hasMany(model("weekDayHabit"), {
    onDelete: "CASCADE",
    foreginKey: { allowNull: false },
  });
};

module.exports = weekDayModel;
