const { Router } = require("express");
const router = Router();
const DayMoodRegistryController = require("@controllers/dayMoodRegistryController");

router.post("/", DayMoodRegistryController.create);
router.get("/:id", DayMoodRegistryController.read);
router.get("/", DayMoodRegistryController.list);
router.put("/:id", DayMoodRegistryController.update);
router.delete("/:id", DayMoodRegistryController.delete);

module.exports = router;
