const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const db = process.env.MONGO_URL;

try {
  mongoose.connect(db);
  console.log("db connected");
} catch (error) {
  console.log(error);
}
