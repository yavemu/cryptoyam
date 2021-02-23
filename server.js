require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const routes = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use(routes);

app.listen(process.env.PORT, () => {
  console.info("Server running on the port: ", process.env.PORT);
});
