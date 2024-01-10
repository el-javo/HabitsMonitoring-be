const { Router } = require("express");
const router = Router();
const HabitRegistryController = require("@controllers/habitRegistryController");

router.post("/", HabitRegistryController.create);
router.get("/:id", HabitRegistryController.read);
router.get("/", HabitRegistryController.list);
router.put("/:id", HabitRegistryController.update);
router.delete("/:id", HabitRegistryController.delete);

module.exports = router;
