const jwt = require("jsonwebtoken");

const Authorization = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.replace("Bearer ", "");
    }

    jwt.verify(token, process.env.JWT_SECRETKEY, (err, user) => {
      if (err) {
        next({
          status: 401,
          message: "Invalid token",
        });
      } else {
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = Authorization;
