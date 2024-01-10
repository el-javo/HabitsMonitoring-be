const { Router } = require("express");
const router = Router();
const HabitController = require("@controllers/habitController");

router.post("/", HabitController.create);
router.get("/:id", HabitController.read);
router.get("/", HabitController.list);
router.put("/:id", HabitController.update);
router.delete("/:id", HabitController.delete);

module.exports = router;
