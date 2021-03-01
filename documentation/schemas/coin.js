const coin = {
  type: "object",
  properties: {
    market_cap_rank: {
      type: "number",
      required: true,
    },
    coinId: {
      type: "string",
      required: true,
    },
    symbol: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: false,
    },
    current_price: {
      type: "number",
      required: true,
    },
    market_cap: {
      type: "number",
      required: true,
    },
    last_updated: {
      type: "string",
      required: true,
    },
  },
};

module.exports = {
  coin,
};
