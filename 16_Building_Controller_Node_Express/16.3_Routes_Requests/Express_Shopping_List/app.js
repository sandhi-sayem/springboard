const express = require("express");
const app = express();
const ExpressError = require("./expressError");
const itemsRoutes = require("./routes/items");

app.use(express.json());
app.use("/items", itemsRoutes);

app.use((req, res, next) => {
  return next(new ExpressError("Page not found", 404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

module.exports = app;
