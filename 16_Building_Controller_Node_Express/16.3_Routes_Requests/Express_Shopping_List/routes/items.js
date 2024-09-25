const express = require("express");
const {
  getAllItems,
  getOneItem,
  createItem,
  updateItem,
  removeItem,
} = require("../item");

const router = express.Router();

router.get("", (req, res, next) => {
  try {
    return res.json({ items: getAllItems() });
  } catch (err) {
    return next(err);
  }
});

router.post("", (req, res, next) => {
  try {
    const newItem = createItem(req.body.name, req.body.price);
    return res.json({ added: newItem });
  } catch (err) {
    return next(err);
  }
});

router.get("/:name", (req, res, next) => {
  try {
    const item = getOneItem(req.params.name);
    return res.json({ item });
  } catch (err) {
    return next(err);
  }
});

router.patch("/:name", (req, res, next) => {
  try {
    const item = updateItem(req.params.name, req.body);
    return res.json({ updated: item });
  } catch (err) {
    return next(err);
  }
});

router.delete("/:name", (req, res, next) => {
  try {
    removeItem(req.params.name);
    return res.json({ message: "Item deleted" });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
