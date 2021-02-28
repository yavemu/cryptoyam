const { User } = require("../../../models/users");

const getUserByIdService = async (userId, params = {}, currenciesOptions = {}, isLean = false) => {
  try {
    const user = await User.findById(userId)
      .lean(isLean)
      .select(params)
      .populate({ path: "currencies", options: currenciesOptions });
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = getUserByIdService;
