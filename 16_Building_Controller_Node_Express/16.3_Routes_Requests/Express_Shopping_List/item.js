const items = require("./fakeDb");

const getAllItems = () => {
  return items;
};

const findItem = (name) => {
  return items.find((item) => item.name === name);
};

const getOneItem = (name) => {
  const item = findItem(name);
  if (item === undefined) throw { message: "Item not found", status: 404 };

  return item;
};

const createItem = (name, price) => {
  const item = findItem(name);
  if (item !== undefined) throw { message: "Item already exists", status: 409 };

  const newItem = { name, price };
  items.push(newItem);

  return newItem;
};

const updateItem = (name, data) => {
  const item = findItem(name);
  if (item === undefined) throw { message: "Item not found", status: 404 };

  item.name = data.name;
  item.price = data.price;

  return item;
};

const removeItem = (name) => {
  const itemIndex = items.findIndex((item) => item.name === name);
  if (itemIndex === undefined) throw { message: "Item not found", status: 404 };

  items.splice(itemIndex, 1);
};

module.exports = {
  getAllItems,
  getOneItem,
  createItem,
  updateItem,
  removeItem,
};
