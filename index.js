const express = require("express");
const applyMiddleWere = require("./middlewares/applyMiddleware");
const connetDb = require("./db/connectDb");
const PORT = process.env.PORT || 4001;

const app = express();

applyMiddleWere(app);

const main = async () => {
  await connetDb();
  app.listen(PORT, () => {
    console.log(`server is rinning at ${PORT}`);
  });
};

main();
