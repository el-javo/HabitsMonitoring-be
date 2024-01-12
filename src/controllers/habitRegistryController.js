const BaseController = require("@controllers/baseController");
const HabitRegistryRepository = require("@repositories/habitRegistryRepository");
const HabitRepository = require("@repositories/habitRepository");

class HabitRegistryController extends BaseController {
  list = async (req, res, next) => {
    let query = Object.keys(req.query) === 0 ? undefined : req.query;
    if (query.userId) {
      const userHabits = await HabitRepository.findBy({ userId });
      delete query.userId;
      const userHabitsIds = userHabits.map((uh) => uh.id);
      query = { ...query, userHabitsIds };
    }
    const newEntity = await this.repository.findBy(query);
    return res.json({ result: newEntity });
  };
}

module.exports = new HabitRegistryController(HabitRegistryRepository);
