const cors = require("cors");

const applyMiddleWere = (app) => {
  app.use(cors());
};

module.exports = applyMiddleWere;