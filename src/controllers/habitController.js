const BaseController = require("@controllers/baseController");
const HabitRepository = require("@repositories/habitRepository");
const WeekDayHabitRepository = require("@repositories/weekDayHabitRepository");

class HabitController extends BaseController {
  create = async (req, res, next) => {
    const body = req.body;
    if (!body || !body.weekDays || !body.weekDays.length) {
      return res.status(400).json({
        error:
          !body.weekDays && body ? "bad request (weekDays)" : "bad request",
      });
    }
    const weekDays = body.weekDays;
    delete body.weekDays;
    const newEntity = await this.repository.create(body);
    const habitId = newEntity.id;
    for (let weekDayId of weekDays) {
      await WeekDayHabitRepository.create({ habitId, weekDayId });
    }
    const newHabit = await this.repository.findBy({ id: habitId });
    return res.json({ result: newHabit });
  };

  update = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    const { weekDays } = body;
    delete body.weekDays;
    if (!body || !id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    await this.repository.update({ id }, body);
    if (weekDays) {
      await WeekDayHabitRepository.delete({ habitId: id });
      for (let weekDayId of weekDays) {
        await WeekDayHabitRepository.create({ habitId: id, weekDayId });
      }
    }
    const newHabit = await this.repository.findBy({ id });
    return res.json({ result: newHabit });
  };
}

module.exports = new HabitController(HabitRepository);
