"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("@config/sequelize.config");

const dayMoodRegistryModel = sequelize.define(
  "dayMoodRegistry",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    observations: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: true }
);

dayMoodRegistryModel.associate = function () {
  const model = (modelName) => this.sequelize.model(modelName);

  this.belongsTo(model("user"), {
    onDelete: "NO ACTION",
    foreginKey: { allowNull: false },
  });
};

module.exports = dayMoodRegistryModel;
