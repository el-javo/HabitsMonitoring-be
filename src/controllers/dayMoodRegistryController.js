const BaseController = require("@controllers/baseController");
const DayMoodRegistryRepository = require("@repositories/dayMoodRegistryRepository");

class DayMoodRegistryController extends BaseController {}

module.exports = new DayMoodRegistryController(DayMoodRegistryRepository);
