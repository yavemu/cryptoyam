const auth = require("./auth");
const user = require("./user");
const errors = require("./errors");

module.exports = { ...user, ...auth, ...errors };
