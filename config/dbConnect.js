require('dotenv').config();
const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    const mongoUri =process.env.MONGO_URL;
    if (!mongoUri) {
      throw new Error('MongoDB URI is undefined');
    }

    await mongoose.connect(mongoUri, {
      autoIndex: true,
    });

    console.log("DB connected successfully!");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
  }
};

module.exports = dbConnect;
