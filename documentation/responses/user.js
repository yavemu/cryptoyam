module.exports = {
  createUser200: {
    description: "User successful response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 200,
            message: "user created success",
            user: {
              _id: "603871de43a0143080daa577",
              name: "name",
              lastname: "lastname",
              username: "username",
              password: "$2b$10$769EWQJJrIgVZ7ASHoXLA.aSSCbuXzrgCOIKQvQ0xV84hOyHvqG6i",
              currency: "EUR",
            },
          },
        },
      },
    },
  },
  createUser400: {
    description: "User error response",
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
  getAllUsers200: {
    description: "Get all users response",
    content: {
      "application/json": {
        schema: {
          example: {
            status: 200,
            message: "user list",
            users: [
              {
                _id: "603688a45eb249781c5752e3",
                name: "name1",
                lastname: "lastname1",
                username: "username1",
                password: "$2b$10$769EWQJJrIgVZ7ASHoXLA.aSSCbuXzrgCOIKQvQ0xV84hOyHvqG6i",
                currency: "EUR",
              },
              {
                _id: "6036894fdbbe7079a279f70a",
                name: "name2",
                lastname: "lastname2",
                username: "username2",
                password: "$2b$10$769EWQJJrIgVZ7ASHoXLA.aSSCbuXzrgCOIKQvQ0xV84hOyHvqG6i",
                currency: "EUR",
              },
            ],
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
