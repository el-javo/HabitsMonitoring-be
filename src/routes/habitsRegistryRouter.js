const { Router } = require("express");
const router = Router();
const {
  createHabitRegistry,
  readHabitRegistry,
  listHabitRegistrys,
  updateHabitRegistry,
  deleteHabitRegistry,
} = require("../controllers/habitRegistryController");

router.post("/", createHabitRegistry);
router.get("/:id", readHabitRegistry);
router.get("/", listHabitRegistrys);
router.put("/:id", updateHabitRegistry);
router.delete("/:id", deleteHabitRegistry);

module.exports = router;
