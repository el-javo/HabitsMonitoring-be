const BaseRepository = require("@repositories/baseRepository");
const habitModel = require("@models/habitModel");

class HabitRepository extends BaseRepository {}

module.exports = new HabitRepository(habitModel);
