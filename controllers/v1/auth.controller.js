const LoginService = require("../../services/v1/auth/login.services");
const { createUser } = require("./user.controller");

const login = async (req, res, next) => {
  try {
    const { body } = req;
    const data = await LoginService(body);
    next(data);
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    await createUser(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  signin,
};
