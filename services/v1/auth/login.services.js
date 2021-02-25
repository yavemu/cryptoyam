const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRETKEY;
const { getAllUserService } = require("../user");

const LoginService = async (body) => {
  try {
    let response = "";
    const { username, password } = body;
    const userExist = await getAllUserService({ username });
    const currentPassword = userExist.length === 1 && userExist[0].password ? userExist[0].password : "";

    const usernameAndPasswordCorrect = await bcrypt.compare(password, currentPassword);

    if (usernameAndPasswordCorrect) {
      // eslint-disable-next-line no-underscore-dangle
      const token = jwt.sign({ id: userExist[0]._id }, secretKey, { expiresIn: "1h" });
      response = ({
        status: 200,
        message: "Login success",
        token,
      });
    } else {
      response = ({
        status: 400,
        message: "username and password incorrect",
      });
    }

    return (response);
  } catch (error) {
    return (error);
  }
};

module.exports = LoginService;
