"use strict";

const Sequelize = require("sequelize");

const {
  SEQUELIZE_DIALECT: dialect,
  SEQUELIZE_DB: db,
  SEQUELIZE_USER: user,
  SEQUELIZE_PASS: pass,
  SEQUELIZE_HOST: host,
  SEQUELIZE_PORT: port,
} = process.env;

const sequelize = new Sequelize(db, user, pass, {
  host,
  port,
  dialect,
  define: {
    timestamps: false,
  },
});

sequelize.createDatabase = async function () {
  const auxiliaryConnection = new Sequelize("postgres", user, pass, {
    host,
    port,
    dialect: sequelize.getDialect(),
  });
  await auxiliaryConnection.authenticate();
  await auxiliaryConnection.getQueryInterface().createDatabase(db);
  await auxiliaryConnection.close();
};

module.exports = sequelize;
