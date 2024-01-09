"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("@config/sequelize.config");

const weekDayHabitModel = sequelize.define(
  "weekDayHabit",
  {
    weekDayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    weekDayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {}
);

weekDayHabitModel.associate = function () {
  const model = (modelName) => this.sequelize.model(modelName);

  this.belongsTo(model("habit"), {
    onDelete: "NO ACTION",
    foreginKey: { allowNull: false },
  });
  this.belongsTo(model("weekDay"), {
    onDelete: "NO ACTION",
    foreginKey: { allowNull: false },
  });
};

module.exports = weekDayHabitModel;
