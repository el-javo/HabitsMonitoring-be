const BaseController = require("@controllers/baseController");
const HabitRegistryRepository = require("@repositories/habitRegistryRepository");

class HabitRegistryController extends BaseController {}

module.exports = new HabitRegistryController(HabitRegistryRepository);
