require("dotenv").config();
require("module-alias/register");
require("@config");

const express = require("express");
const router = require("@routes/index");
const errorHandler = require("@middlewares/errorHandler");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.get("/", (req, res, next) => {
  res.status(200).send("testing");
});
app.use("/api", router);
app.all("*", (req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
