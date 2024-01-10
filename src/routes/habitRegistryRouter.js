const { Router } = require("express");
const router = Router();
const HabitRegistryController = require("@controllers/habitRegistryController");
const errorWrapper = require("@services/errorWrapper");

router.post("/", errorWrapper(HabitRegistryController.create));
router.get("/:id", errorWrapper(HabitRegistryController.read));
router.get("/", errorWrapper(HabitRegistryController.list));
router.put("/:id", errorWrapper(HabitRegistryController.update));
router.delete("/:id", errorWrapper(HabitRegistryController.delete));

module.exports = router;
