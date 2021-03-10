const handleResponse = (responseData, req, res, next) => {
  const canResponse = !!responseData.status && !!responseData.message;

  if (canResponse) {
    res.status(responseData.status).send({
      ...responseData,
    });
  }
  next();
};

module.exports = handleResponse;
