const BaseRepository = require("@repositories/baseRepository");
const weekDayHabitModel = require("@models/weekDayHabitModel");

class WeekDayHabitRepository extends BaseRepository {}

module.exports = new WeekDayHabitRepository(weekDayHabitModel);
