const { Router } = require("express");
const router = Router();
const {
  createDayMoodRegistry,
  readDayMoodRegistry,
  listDayMoodRegistries,
  updateDayMoodRegistry,
  deleteDayMoodRegistry,
} = require("@controllers/dayMoodRegistryController");

router.post("/", createDayMoodRegistry);
router.get("/:id", readDayMoodRegistry);
router.get("/", listDayMoodRegistries);
router.put("/:id", updateDayMoodRegistry);
router.delete("/:id", deleteDayMoodRegistry);

module.exports = router;
