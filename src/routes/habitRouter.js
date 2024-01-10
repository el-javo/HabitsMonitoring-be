const { Router } = require("express");
const router = Router();
const HabitController = require("@controllers/habitController");
const errorWrapper = require("@services/errorWrapper");

router.post("/", errorWrapper(HabitController.create));
router.get("/:id", errorWrapper(HabitController.read));
router.get("/", errorWrapper(HabitController.list));
router.put("/:id", errorWrapper(HabitController.update));
router.delete("/:id", errorWrapper(HabitController.delete));

module.exports = router;
