const BaseRepository = require("@repositories/baseRepository");
const dayMoodRegistryModel = require("@models/dayMoodRegistryModel");

class DayMoodRegistryRepository extends BaseRepository {
  //? here will be implemented some extra functions like getDayMoodsInARange(from,to)
}

module.exports = new DayMoodRegistryRepository(dayMoodRegistryModel);
