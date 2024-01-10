"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("@config/sequelize.config");

const weekDayModel = sequelize.define(
  "weekDay",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);

weekDayModel.associate = function () {
  const model = (modelName) => this.sequelize.model(modelName);

  this.hasMany(model("weekDayHabit"), {
    onDelete: "CASCADE",
    foreginKey: { allowNull: false },
  });
};

module.exports = weekDayModel;
