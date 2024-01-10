const BaseRepository = require("@repositories/baseRepository");
const habitRegistryModel = require("@models/habitRegistryModel");

class HabitRegistryRepository extends BaseRepository {
  //? here will be implemented some extra functions like getHabitRegistryInARange(from,to)
}

module.exports = new HabitRegistryRepository(habitRegistryModel);
