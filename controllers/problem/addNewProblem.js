const problems = require("../../modals/problem");

const addNewProblem = async (req, res) => {
  const problemData = req.body;
  const result = await problems.create(problemData);
  res.send(result);
};

module.exports = addNewProblem;