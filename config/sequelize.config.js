"use strict";

const Sequelize = require("sequelize");
const { dialect, db, user, pass, host, port } = require("@config").sequelize;

const sequelize = new Sequelize(db, user, pass, {
  host,
  port,
  dialect,
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
