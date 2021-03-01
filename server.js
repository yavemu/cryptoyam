require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const documentation = require("./documentation");

const app = express();

const { dbConnection } = require("./database/index");

dbConnection();
const routes = require("./routes");

if (process.env.NODE_ENV !== "test") {
  app.use(logger("dev"));
}
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/docs", swaggerUi.serve, swaggerUi.setup(documentation));
app.use(routes);

app.listen(process.env.PORT, () => {
  console.info("Server running on the port: ", process.env.PORT);
});

module.exports = app;
