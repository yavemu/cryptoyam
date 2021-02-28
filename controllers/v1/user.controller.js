// Services
const { createUserService, getAllUserService, existUsernameService } = require("../../services/v1/user/index");

const createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const { exist, error } = await existUsernameService(body.username);

    if (exist) {
      return next(error);
    }

    const user = await createUserService(body);
    next({
      status: 200,
      message: "user created success",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    next({
      status: 200,
      message: "user list",
      users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUser,
};
