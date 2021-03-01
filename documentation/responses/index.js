const auth = require("./auth");
const coin = require("./coin");
const user = require("./user");
const errors = require("./errors");

module.exports = {
  ...user, ...coin, ...auth, ...errors,
};
