const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { User, validateUserSchema } = require("../models/user");

router.get("/", async (req, res) => {
  const user = await User.find()
    .sort({ firstname: 1, lastname: 1 })
    .select("-password");
  return res.status(200).send(user);
});

router.post("/", async (req, res) => {
  const { error } = validateUserSchema(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) return res.status(400).send("User already registered.");

  const user = new User(
    _.pick(req.body, ["firstName", "lastName", "dob", "email", "password"])
  );

  await user.save();

  return res
    .status(200)
    .send(
      _.pick(user, ["_id", "firstName", "lastName", "dob", "email", "password"])
    );
});

module.exports = router;
