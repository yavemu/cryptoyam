const { currencyOptions } = require("../../utils/index");

const createUser = {
  type: "object",
  properties: {
    name: {
      type: "string",
      required: true,
    },
    lastname: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    currency: {
      type: "string",
      required: true,
      enum: currencyOptions,
    },
  },
};

module.exports = {
  createUser,
};
