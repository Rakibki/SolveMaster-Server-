const express = require("events");
const PORT = process.env.PORT || 4001;

const app = express();

app.listen(PORT, () => {
  console.log(`server is rinning at ${PORT}`);
});
