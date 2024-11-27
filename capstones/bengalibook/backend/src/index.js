const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const User = require("../models/user");
const { body, validationResult } = require("express-validator");

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
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ info: "Node.js, Express, and MongoDb" });
});

// app.get("/add-user", (req, res) => {
//   const user = new User({
//     firstname: "QA",
//     lastname: "Tester",
//     dob: "1996-12-31",
//     email: "QA.TESTER@Testing.com",
//     password: "tester",
//   });

//   user
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

app.post(
  "/add-user",
  body("firstname")
    .isLength({ min: 2 })
    .escape()
    .withMessage("Firstname should be at least 2 characters"),
  body("lastname")
    .isLength({ min: 2 })
    .escape()
    .withMessage("Lastname should be at least 2 characters"),
  body("dob")
    .isLength({ min: 10 })
    .isDate()
    .escape()
    .withMessage("DOB should be at least 10 characters and a valid date"),
  body("email").isEmail().escape().withMessage("Not a valid e-mail address"),
  body("password")
    .isLength({ min: 6 })
    .escape()
    .withMessage("Password should be at least 6 characters"),
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json("Invalid values");
    }
    return res.status(200).json("blah blah");
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dob: req.body.dob,
      email: req.body.email,
      password: req.body.password,
    });

    user
      .save()
      .then((result) => res.status(200).json(result))
      .catch((err) => console.log(err));
  }
);

app.get("/single-user", (req, res) => {
  User.findById("673fed7882c28c44840b7d28")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/all-users", (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
