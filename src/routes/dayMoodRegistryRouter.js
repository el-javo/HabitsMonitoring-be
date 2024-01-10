const { Router } = require("express");
const router = Router();
const DayMoodRegistryController = require("@controllers/dayMoodRegistryController");
const errorWrapper = require("@services/errorWrapper");

router.post("/", errorWrapper(DayMoodRegistryController.create));
router.get("/:id", errorWrapper(DayMoodRegistryController.read));
router.get("/", errorWrapper(DayMoodRegistryController.list));
router.put("/:id", errorWrapper(DayMoodRegistryController.update));
router.delete("/:id", errorWrapper(DayMoodRegistryController.delete));

module.exports = router;
