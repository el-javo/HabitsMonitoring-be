const { Router } = require("express");
const router = Router();
const { createUser, readUser, listUsers, updateUser, deleteUser } =
  require("../controllers/userController").default;

router.post("/", createUser);
router.get("/:id", readUser);
router.get("/", listUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
