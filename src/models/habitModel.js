"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("@config/sequelize.config");

const habitModel = sequelize.define(
  "habit",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIcrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    isBoolean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    weight: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 1 },
  },
  {}
);

habitModel.associate = function () {
  const model = (modelName) => this.sequelize.model(modelName);

  this.belongsTo(model("user"), {
    onDelete: "NO ACTION",
    foreginKey: { allowNull: false },
  });
  this.hasMany(model("dayRegistry"), {
    onDelete: "CASCADE",
    foreginKey: { allowNull: false },
  });
  this.hasMany(model("weekDayHabits"), {
    onDelete: "CASCADE",
    foreginKey: { allowNull: false },
  });
};

module.exports = habitModel;
