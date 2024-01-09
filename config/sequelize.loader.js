const sequelize = require("@config/sequelize.config");
const habitModel = require("@models/habitModel");
const habitRegistryModel = require("@models/habitRegistryModel");
const userModel = require("@models/userModel");
const weekDayModel = require("@models/weekDayModel");
const weekDayHabitModel = require("@models/weekDayHabitModel");

[
  habitModel,
  habitRegistryModel,
  userModel,
  weekDayModel,
  weekDayHabitModel,
].forEach((model) => model.associate());

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    await sequelize.createDatabase();
    await sequelize.authenticate();
    await sequelize.sync();
  }
})();
