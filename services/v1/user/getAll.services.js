const { User } = require("../../../models/users");

const getAllService = async (condition = {}) => {
  try {
    const user = await User.find(condition).populate({ path: "currencies" });
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = getAllService;
