import express from "express";
import ExpressError from "./expressError.mjs";
import {
  validateNumsArray,
  findMean,
  findMedian,
  findMode,
} from "./helpers.mjs";

const app = express();

app.get("/mean", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  const numsAsStrings = req.query.nums.split(",");

  const numsAsNumbers = validateNumsArray(numsAsStrings);
  if (numsAsNumbers instanceof Error) {
    throw new ExpressError(numsAsNumbers.message);
  }

  const result = {
    operation: "mean",
    value: findMean(numsAsNumbers),
  };

  return res.send(result);
});

app.get("/median", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }

  const numsAsStrings = req.query.nums.split(",");

  const numsAsNumbers = validateNumsArray(numsAsStrings);
  if (numsAsNumbers instanceof Error) {
    throw new ExpressError(numsAsNumbers.message);
  }

  let result = {
    operation: "median",
    value: findMedian(numsAsNumbers),
  };

  return res.send(result);
});

app.get("/mode", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }

  const numsAsStrings = req.query.nums.split(",");

  const numsAsNumbers = validateNumsArray(numsAsStrings);
  if (numsAsNumbers instanceof Error) {
    throw new ExpressError(numsAsNumbers.message);
  }

  let result = {
    operation: "mode",
    value: findMode(numsAsNumbers),
  };

  return res.send(result);
});

app.use((req, res, next) => {
  const err = new ExpressError("Not Found", 404);

  return next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
