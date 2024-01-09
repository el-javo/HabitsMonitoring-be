"use strict";

// Set env variables
require("dotenv").config();

const config = {
  expressPort: process.env.EXPRESS_PORT,
  sequelize: {
    dialect: process.env.SEQUELIZE_DIALECT || "postgres",
    db: process.env.SEQUELIZE_DB,
    user: process.env.SEQUELIZE_USER,
    pass: process.env.SEQUELIZE_PASS,
    host: process.env.SEQUELIZE_HOST,
    port: process.env.SEQUELIZE_PORT,
    schema: process.env.SEQUELIZE_SCHEMA || "elliot",
  },
};

if (!process.env.CREATE_RESOURCE) console.log("Configuration loaded:", config);

module.exports = config;
