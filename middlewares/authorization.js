const jwt = require("jsonwebtoken");

const getTokenUserId = (token) => jwt.decode(token, process.env.JWT_SECRETKEY);

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
        const tokenData = getTokenUserId(token);
        req.userId = tokenData.id;
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = Authorization;
