const handleErrors = (responseData, req, res, next) => {
  const status = responseData.status || 500;
  const message = responseData.message || "Internal Server Error";

  res.status(status).send({
    ...responseData,
    status,
    message,
  });
  next();
};

module.exports = handleErrors;
