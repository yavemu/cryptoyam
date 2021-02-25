require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const { dbConnection } = require("./database/index");

dbConnection();
const routes = require("./routes");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use(routes);

app.listen(process.env.PORT, () => {
  console.info("Server running on the port: ", process.env.PORT);
});
