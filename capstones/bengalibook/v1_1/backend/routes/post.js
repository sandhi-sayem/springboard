const express = require("express");
const router = express.Router();
const _ = require("lodash");
const {
  Post,
  validatePostCreateSchema,
  validatePostUpdateSchema,
} = require("../models/post");
const { User } = require("../models/user");

router.get("/", async (req, res) => {
  const post = await Post.find().sort({ updatedAt: 1 });
  return res.status(200).send(post);
});

router.post("/", async (req, res) => {
  const { error } = validatePostCreateSchema(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const post = new Post(
    _.pick(req.body, ["user", "title", "description", "image", "video"])
  );

  await post.save();

  return res
    .status(200)
    .send(
      _.pick(post, ["_id", "user", "title", "description", "image", "video"])
    );
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post)
    return res.status(404).send("The user with the given ID was not found.");

  return res
    .status(200)
    .send(
      _.pick(post, ["_id", "user", "title", "description", "image", "video"])
    );
});

router.put("/:id", async (req, res) => {
  const { error } = validatePostUpdateSchema(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findById(req.body.userId);

  const post = await Post.findByIdAndUpdate(
    req.params.id,
    {
      user: {
        fullName: user.firstName + user.lastName,
        profileImage: user.profileImage,
      },
      lastName: req.body.lastName,
      password: req.body.password,
    },
    { new: true }
  );

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  return res
    .status(200)
    .send(
      _.pick(post, ["_id", "user", "title", "description", "image", "video"])
    );
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user)
    return res.status(404).send("The user with given ID was not found.");

  return res
    .status(200)
    .send(
      _.pick(post, ["_id", "user", "title", "description", "image", "video"])
    );
});

module.exports = router;
