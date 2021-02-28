const { User } = require("../../../models/users");

const updateService = async (user) => {
  try {
    return await User.save(user);
  } catch (error) {
    return (error);
  }
};

module.exports = updateService;
