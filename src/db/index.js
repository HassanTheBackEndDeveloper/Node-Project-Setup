const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`
    );

    console.log(`Connected to MongoDB - ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error in db connection - ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
