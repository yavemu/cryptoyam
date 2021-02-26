module.exports = {
  internalError: {
    description: "Internal Error",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 500,
            message: "Internal Error",
          },
        },
      },
    },
  },
  unauthorized: {
    description: "Invalid token",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 401,
            message: "Invalid token",
          },
        },
      },
    },
  },
};
