module.exports = {
  signin200: {
    description: "Signin successful response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 200,
            message: "user created success",
            user: {
              _id: "60386da7d5d75629c9ca12f3",
              name: "userName",
              lastname: "userLastName",
              username: "myUsername",
              password: "$2b$10$5YhUwPaAuqr6SqhvOtNHneQa/RcEF8a23ddpIisRf6U4tCzCiJxLq",
              currency: "EUR",
            },
          },
        },
      },
    },
  },
  signin400: {
    description: "Signin error response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 400,
            message: "Validations errors",
            error: {
              fields: [
                {
                  field: "username",
                  message: "\"username\" already exists",
                },
              ],
            },
          },
        },
      },
    },
  },
  login200: {
    description: "Login successful response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: "200",
            message: "Login success1",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzcxYWNkMTE1YmY2NGYzYmJhZWI2NiIsImlhdCI6MTYxNDMwNzcyNSwiZXhwIjoxNjE0MzExMzI1fQ.QAbR2C4Vg8fUzb40UZyq7vU1CdVsIuO6465_PqOucvI",
          },
        },
      },
    },
  },
  login400: {
    description: "Login error response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 400,
            message: "Validations errors",
            error: {
              fields: [
                {
                  field: "username",
                  message: "\"username\" is required",
                },
                {
                  field: "password",
                  message: "\"password\" is required",
                },
              ],
            },
          },
        },
      },
    },
  },
};
