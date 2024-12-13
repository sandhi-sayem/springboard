const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const {
  generic404Handler,
  generalErrorHandler,
} = require("../middleware/error");
const user = require("../routes/user");
const post = require("../routes/post");

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
app.get("/", (req, res) => {
  res.status(200).json({ info: "Node.js, Express, and MongoDb" });
});
app.use("/api/users", user);
app.use("/api/posts", post);

app.use(generic404Handler);
app.use(generalErrorHandler);
