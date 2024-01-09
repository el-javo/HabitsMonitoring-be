const { Router } = require("express");
const router = Router();

const userRouter = require("./userRouter");
const habitRouter = require("./habitRouter");
const habitRegistryRouter = require("./habitRegistryRouter");

router.use("/v1/users", userRouter);
router.use("/v1/habits", habitRouter);
router.use("/v1/habitRegistries", habitRegistryRouter);

module.exports = router;
