const mongoose = require("mongoose");
const { errorMessage } = require("../utils");

const dbConnection = async () => {
  try {
    const env = process.env.NODE_ENV || "development";
    const suffix = env !== "production" ? `_${env}` : "";
    const dbStringConnection = `${process.env.MONGODB_STRING_CONNECTION}${suffix}`;
    const dbParams = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };

    await mongoose.connect(dbStringConnection, dbParams);
  } catch (error) {
    errorMessage("Failed to connect database.", error);
  }
};

module.exports = {
  dbConnection,
};
