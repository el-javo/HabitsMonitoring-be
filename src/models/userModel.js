"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("@config/sequelize.config");

const userModel = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {}
);

userModel.associate = function () {
  const model = (modelName) => this.sequelize.model(modelName);

  this.hasMany(model("habit"), {
    onDelete: "CASCADE",
    foreginKey: { allowNull: false },
  });

  this.hasMany(model("dayMoodRegistry"), {
    onDelete: "CASCADE",
    foreginKey: { allowNull: false },
  });
};

module.exports = userModel;
