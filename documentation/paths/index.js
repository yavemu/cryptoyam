const auth = require("./auth");
const coin = require("./coin");
const user = require("./user");

module.exports = { ...auth, ...coin, ...user };
