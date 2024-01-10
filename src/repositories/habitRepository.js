const BaseRepository = require("@repositories/baseRepository");
const habitModel = require("@models/habitModel");
const WeekDayHabitRepository = require("@repositories/weekDayHabitRepository");

class HabitRepository extends BaseRepository {
  findBy = async (query) => {
    const habits = await this.model.findAll({ where: query });
    return await Promise.all(
      habits.map(async (h) => {
        const weekDays = await WeekDayHabitRepository.findBy({ habitId: h.id });
        h.dataValues.weekDays = weekDays.map((w) => w.weekDayId);
        return h;
      })
    );
  };
}

module.exports = new HabitRepository(habitModel);
