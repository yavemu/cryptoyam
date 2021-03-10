const { topCoinLimit } = require("../../utils");

module.exports = {
  coinList200: {
    description: "Get coin list successful response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 200,
            message: "coin list",
            coins: [
              {
                market_cap_rank: 1,
                coinId: "bitcoin",
                symbol: "btc",
                name: "Bitcoin",
                image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                current_price: 40921,
                market_cap: 763317573166,
                last_updated: "2021-03-01T16:32:52.650Z",
              },
              {
                market_cap_rank: 2,
                coinId: "ethereum",
                symbol: "eth",
                name: "Ethereum",
                image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
                current_price: 1289.58,
                market_cap: 148137643733,
                last_updated: "2021-03-01T16:31:58.628Z",
              },
            ],
          },
        },
      },
    },
  },
  addCoin200: {
    description: "Add a coin response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 200,
            message: "Coin Add success",
            coin: {
              market_cap_rank: 1,
              coinId: "bitcoin",
              symbol: "btc",
              name: "Bitcoin",
              image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
              current_price: 40921,
              market_cap: 763317573166,
              last_updated: "2021-03-01T16:32:52.650Z",
            },
          },
        },
      },
    },
  },
  addCoin400: {
    description: "Add a coin error response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 400,
            message: "This coin does not exist",
          },
        },
      },
    },
  },
  topCoin200: {
    description: "Add a coin response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 200,
            message: "Top Coin list",
            sort: "current_price",
            limit: topCoinLimit,
            topCoins: [
              {
                _id: "603d3e5cc3627766112c8bed",
                market_cap_rank: 1,
                coinId: "bitcoin",
                symbol: "btc",
                name: "Bitcoin",
                image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                current_price: 40360,
                market_cap: 750061990195,
                last_updated: "2021-03-01T19:17:57.641Z",
                userId: "603d3e5ac3627766112c8bec",
                __v: 0,
                topCoinPrice: {
                  eur: 40614,
                  usd: 48924,
                  ars: 4407285,
                },
              },
            ],
          },
        },
      },
    },
  },
};
