const Joi = require("joi");
const validateRequest = require("./_validateRequest");

const loginUserSchema = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  validateRequest(req, res, next, schema);
};

module.exports = {
  loginUserSchema,
};
