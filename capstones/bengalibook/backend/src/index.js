const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const User = require("../models/user");

const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(port, () => console.log(`App running on port ${port}.`))
  )
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

// app.get("/add-user", (req, res) => {
//   const user = new User({
//     username: "tester",
//     firstname: "QA",
//     lastname: "Tester",
//     email: "QA.TESTER@Testing.com",
//     dob: "1996-12-31",
//   });

//   user
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.error(err));
// });

app.get("/single-user", (req, res) => {
  User.findById("673fed7882c28c44840b7d28")
    .then((result) => res.send(result))
    .catch((err) => console.error(err));
});

app.get("/all-users", (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((err) => console.error(err));
});
