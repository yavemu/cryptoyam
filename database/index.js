const mongoose = require("mongoose");
const { errorMessage } = require("../utils");

const dbConnection = async () => {
  try {
    const dbStringConnection = process.env.MONGODB_STRING_CONNECTION;
    const dbParams = { useNewUrlParser: true };

    await mongoose.connect(dbStringConnection, dbParams);
    console.log("Successful connection to the database");
  } catch (error) {
    errorMessage("Failed to connect database.", error);
  }
};

module.exports = {
  dbConnection,
};
