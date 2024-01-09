require("dotenv").config();
const express = require("express");
const rootRouter = require("./routes/index");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${port}`);
});
