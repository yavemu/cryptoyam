const { currencyOptions } = require("../../utils/index");

const user = {
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
    currencies: {
      type: "array",
      items: {
        $ref: "#/components/schemas/coin",
      },
    },
  },
};

module.exports = {
  user,
};
