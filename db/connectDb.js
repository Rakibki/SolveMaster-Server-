const mongoose = require("mongoose");

//SolveMaster
//Gn8oe2N51JX1m2dc

const connetDb = () => {
  const url = `mongodb+srv://SolveMaster:Gn8oe2N51JX1m2dc@cluster0.sinogwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  console.log("connecting Db...");
  mongoose.connect(url);
  console.log("connected Db...");
};

module.exports = connetDb;
