const blogs = require("../../modals/blog");

const deleteProblem = async () => {
  const id = req.params.id;
  const filter = { problemId: id };
  const result = await blogs.deleteOne(filter);
  res.send(result);
};

module.exports = deleteProblem;