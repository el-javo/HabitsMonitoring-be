const BaseController = require("@controllers/baseController");
const HabitRepository = require("@repositories/habitRepository");

class HabitController extends BaseController {}

module.exports = new HabitController(HabitRepository);
