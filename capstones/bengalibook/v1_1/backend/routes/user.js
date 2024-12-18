const express = require("express");
const router = express.Router();
const _ = require("lodash");
const {
  User,
  validateUserRegisterSchema,
  validateUserUpdateSchema,
} = require("../models/user");

router.get("/", async (req, res) => {
  const user = await User.find()
    .sort({ firstname: 1, lastname: 1 })
    .select("-password");
  return res.status(200).send(user);
});

router.post("/", async (req, res) => {
  const { error } = validateUserRegisterSchema(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) return res.status(400).send("User already registered.");

  const user = new User(
    _.pick(req.body, ["firstName", "lastName", "dob", "email", "password"])
  );

  await user.save();

  return res
    .status(200)
    .send(_.pick(user, ["_id", "firstName", "lastName", "dob", "email"]));
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  return res
    .status(200)
    .send(_.pick(user, ["_id", "firstName", "lastName", "dob", "email"]));
});

router.put("/:id", async (req, res) => {
  const { error } = validateUserUpdateSchema(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    },
    { new: true }
  );

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  return res
    .status(200)
    .send(_.pick(user, ["_id", "firstName", "lastName", "dob", "email"]));
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user)
    return res.status(404).send("The user with given ID was not found.");

  return res
    .status(200)
    .send(_.pick(user, ["_id", "firstName", "lastName", "dob", "email"]));
});

module.exports = router;
