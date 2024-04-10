const problems = require("../../modals/problem");

const getSingleProblem = async (req, res) => {
  const id = req.params.id;
  const filter = { problemId: parseInt(id) };
  const result = await problems.findOne(filter);
  res.send(result);
};

module.exports = getSingleProblem;
