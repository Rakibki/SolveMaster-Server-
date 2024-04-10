const express = require("express");
const applyMiddleWere = require("./middlewares/applyMiddleware");
const connetDb = require("./db/connectDb");
const PORT = process.env.PORT || 4001;
require("dotenv").config();
const blogRoutes = require("./routes/blogs/index");
const problemRoutes = require("./routes/problems/index");
const courseRoutes = require("./routes/courses/index");
const userRoutes = require("./routes/users/index");

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Server is running" });
});

applyMiddleWere(app);

app.use(blogRoutes);
app.use(problemRoutes);
app.use(courseRoutes);
app.use(userRoutes);


const main = async () => {
  await connetDb();
  app.listen(PORT, () => {
    console.log(`server is rinning at ${PORT}`);
  });
};

main();