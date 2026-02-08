const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    dotenv.config({ path: path.join(__dirname, "../.env") });
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
