const { Router } = require("express");
const router = Router();
const UserController = require("@controllers/userController");
const errorWrapper = require("@services/errorWrapper");

router.post("/", errorWrapper(UserController.create));
router.get("/:id", errorWrapper(UserController.read));
router.get("/", errorWrapper(UserController.list));
router.put("/:id", errorWrapper(UserController.update));
router.delete("/:id", errorWrapper(UserController.delete));

module.exports = router;
