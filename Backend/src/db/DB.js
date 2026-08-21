const express = require('express');

const app = express();

const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI
    );

    console.log("MongoDB Connected");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });

  } catch (err) {
    console.log("Database Connection Error:", err);
  }
}


module.exports = connectDB;