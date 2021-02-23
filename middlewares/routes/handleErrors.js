const handleErrors = (error, req, res, next) => {
  console.error(error);
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  const response = {
    error: {
      status,
      message,
    },
  };

  res.status(status).send({ response });
};

module.exports = handleErrors;
