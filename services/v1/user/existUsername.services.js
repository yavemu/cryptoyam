const { User } = require("../../../models/users");

const existUsernameService = async (username) => {
  try {
    let error = null;
    const exist = await User.exists({ username });

    if (exist) {
      error = {
        status: 400,
        message: "Validations errors",
        error: {
          fields: [
            {
              field: "username",
              message: "\"username\" already exists",
            },
          ],
        },
      };
    }

    return {
      exist,
      error,
    };
  } catch (error) {
    return error;
  }
};

module.exports = existUsernameService;
