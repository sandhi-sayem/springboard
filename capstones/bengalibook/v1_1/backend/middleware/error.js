const generic404Handler = (req, res, next) => {
  const err = { message: "Not Found", status: 404 };
  return next(err);
};

const generalErrorHandler = (err, req, res, next) => {
  return res
    .status(err.status || 500)
    .send({ error: err, message: err.message || "Something failed." });
};

module.exports = { generic404Handler, generalErrorHandler };
