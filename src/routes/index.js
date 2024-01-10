const { Router } = require("express");
const router = Router();

const userRouter = require("./userRouter");
const habitRouter = require("./habitRouter");
const habitRegistryRouter = require("./habitRegistryRouter");
const dayMoodRegistryRouter = require("./dayMoodRegistryRouter");

router.use("/v1/users", userRouter);
router.use("/v1/habits", habitRouter);
router.use("/v1/habitRegistries", habitRegistryRouter);
router.use("/v1/dayMoodRegistries", dayMoodRegistryRouter);

module.exports = router;
