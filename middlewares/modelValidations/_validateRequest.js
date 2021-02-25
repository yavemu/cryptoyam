const validateRequest = (req, res, next, schema) => {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    const errorFields = error.details.map((el) => ({
      field: el.path[0],
      message: el.message,
    }));

    if (errorFields.length) {
      res.status(400).send({
        status: 400,
        message: "Validations errors",
        error: {
          fields: errorFields,
        },
      });
    }
  } else {
    req.body = value;
    next();
  }
};

module.exports = validateRequest;
