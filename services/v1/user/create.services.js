const { User } = require("../../../models/users");

const createService = async (user) => {
  try {
    return await User.create(user);
  } catch (error) {
    return (error);
  }
};

module.exports = createService;
