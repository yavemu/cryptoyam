const handleError404 = (req, res, next) => {
  console.error("handleError404");
  const error = new Error("Not found");
  error.status = 404;
  next(error);
};

module.exports = handleError404;
