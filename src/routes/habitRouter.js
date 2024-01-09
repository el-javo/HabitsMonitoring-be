const { Router } = require("express");
const router = Router();
const {
  createHabit,
  readHabit,
  listHabits,
  updateHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.post("/", createHabit);
router.get("/:id", readHabit);
router.get("/", listHabits);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);

module.exports = router;
