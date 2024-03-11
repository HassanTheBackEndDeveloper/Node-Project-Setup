require("dotenv").config();

const connectDB = require("./db");
const app = require("./app");

const PORT = process.env.PORT || 8000;

(async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.error("Error in express app - ", error);
      process.exit(1);
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error during starting server - ", error);
    process.exit(1);
  }
})();
