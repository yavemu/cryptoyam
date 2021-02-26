const auth = {
  "/auth/signin": {
    post: {
      tags: ["Auth"],
      summary: "Sign user",
      operationId: "signin",
      requestBody: {
        description: "Sigin user body",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/signin",
            },
          },
        },
      },
      responses: {
        200: {
          $ref: "#/components/responses/signin200",
        },
        400: {
          $ref: "#/components/responses/signin400",
        },
        500: {
          $ref: "#/components/responses/internalError",
        },

      },
    },
  },
  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Login user",
      operationId: "login",
      requestBody: {
        description: "Login user body",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/login",
            },
          },
        },
      },
      responses: {
        200: {
          $ref: "#/components/responses/login200",
        },
        400: {
          $ref: "#/components/responses/login400",
        },
        500: {
          $ref: "#/components/responses/internalError",
        },

      },
    },
  },
};

module.exports = auth;
