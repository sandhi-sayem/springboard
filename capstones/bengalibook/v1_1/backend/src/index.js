const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const user = require("../routes/user");

const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB.");
    app.listen(port, () => console.log(`App running on port ${port}.`));
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", user);

app.get("/", (req, res) => {
  res.status(200).json({ info: "Node.js, Express, and MongoDb" });
});
