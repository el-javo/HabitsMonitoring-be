"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("@config/sequelize.config");

const habitRegistryModel = sequelize.define(
  "habitRegistry",
  {
    habitId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    date: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
    value: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
  },
  { timeStamps: false }
);

habitRegistryModel.associate = function () {
  const model = (modelName) => this.sequelize.model(modelName);

  this.hasMany(model("habit"), {
    onDelete: "NO ACTION",
    foreginKey: { allowNull: false },
  });
};

module.exports = habitRegistryModel;
