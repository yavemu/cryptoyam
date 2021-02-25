const Joi = require("joi");
const { currencyOptions } = require("../../utils");
const validateRequest = require("./_validateRequest");

const createUserSchema = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().min(8).required(),
    currency: Joi.string().uppercase().valid(...currencyOptions).required(),
  });
  validateRequest(req, res, next, schema);
};

module.exports = {
  createUserSchema,
};
