const user = {
  "/user": {
    post: {
      tags: ["User"],
      summary: "Create new user",
      operationId: "createUser",
      requestBody: {
        description: "User creation body",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/createUser",
            },
          },
        },
      },
      responses: {
        200: {
          $ref: "#/components/responses/createUser200",
        },
        400: {
          $ref: "#/components/responses/createUser400",
        },
        404: {
          $ref: "#/components/responses/unauthorized",
        },
        500: {
          $ref: "#/components/responses/internalError",
        },

      },
    },
    get: {
      tags: ["User"],
      summary: "Get all users",
      operationId: "getUsers",
      responses: {
        200: {
          $ref: "#/components/responses/getAllUsers200",
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

module.exports = user;
