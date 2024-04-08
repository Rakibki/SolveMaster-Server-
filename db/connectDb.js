const mongoose = require("mongoose");
require("dotenv").config();

const connetDb = () => {
  const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  console.log("connecting Db...");
  mongoose.connect(url);
  console.log("connected Db...");
};

module.exports = connetDb;
