const coin = {
  "/coin": {
    get: {
      tags: ["Coin"],
      summary: "Get coin list",
      operationId: "coinList",
      responses: {
        200: {
          $ref: "#/components/responses/coinList200",
        },
        404: {
          $ref: "#/components/responses/unauthorized",
        },
        500: {
          $ref: "#/components/responses/internalError",
        },

      },
    },
  },
  "/coin/:coinId/add": {
    get: {
      tags: ["Coin"],
      summary: "Add a coin",
      operationId: "addCoin",
      responses: {
        200: {
          $ref: "#/components/responses/addCoin200",
        },
        400: {
          $ref: "#/components/responses/addCoin400",
        },
        404: {
          $ref: "#/components/responses/unauthorized",
        },
        500: {
          $ref: "#/components/responses/internalError",
        },

      },
    },
  },
  "/coin/top": {
    get: {
      tags: ["Coin"],
      summary: "Get a top coin",
      operationId: "topCoin",
      responses: {
        200: {
          $ref: "#/components/responses/topCoin200",
        },
        404: {
          $ref: "#/components/responses/unauthorized",
        },
        500: {
          $ref: "#/components/responses/internalError",
        },

      },
    },
  },
};

module.exports = coin;
