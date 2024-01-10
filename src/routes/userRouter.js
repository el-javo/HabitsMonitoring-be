const { Router } = require("express");
const router = Router();
const UserController = require("@controllers/userController");

router.post("/", UserController.create);
router.get("/:id", UserController.read);
router.get("/", UserController.list);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

module.exports = router;
