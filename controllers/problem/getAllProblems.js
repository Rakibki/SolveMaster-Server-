const problems = require("../../modals/problem");

const getAllProblems = async (req, res) => {
  const result = await problems.find();
  res.send(result);
};

module.exports = getAllProblems;
