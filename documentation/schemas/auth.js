const { currencyOptions } = require("../../utils/index");

const login = {
  type: "object",
  properties: {
    username: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
};

const signin = {
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
  login,
  signin,
};
