const express = require("express");
const applyMiddleWere = require("./middlewares/applyMiddleware");
const connetDb = require("./db/connectDb");
const PORT = process.env.PORT || 4001;
require("dotenv").config();
const blogRoutes = require("./routes/blogs/index");
const problemRoutes = require("./routes/problems/index");
const courseRoutes = require("./routes/courses/index");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Server is running" });
});

app.use(blogRoutes);
app.use(problemRoutes);
app.use(courseRoutes);

applyMiddleWere(app);

const main = async () => {
  await connetDb();
  app.listen(PORT, () => {
    console.log(`server is rinning at ${PORT}`);
  });
};

main();