const paths = require("./paths");
const responses = require("./responses");
const schemas = require("./schemas");

const swaggerConfig = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Crypto YAM - API",
    description: "Cryptoyam API",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/api/v1`,
    },
  ],
  security: [],
  tags: [
    { name: "Auth", description: "Authentications endpoints" },
    { name: "Coin", description: "Coin endpoints" },
    { name: "User", description: "User endpoints" },
  ],
  paths,
  components: {
    schemas,
    responses,
    securitySchemes: {
      bearer: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

module.exports = swaggerConfig;
