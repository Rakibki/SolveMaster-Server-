const { Schema, model } = require("mongoose");

const problemSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  difficulty: {
    type: String,
  },
  exampleInput: {
    type: String,
  },
  exampleOutput: {
    type: String,
  },
  tests: {
    type: Array,
  },
});

const problems = model("problems", problemSchema);

module.exports = problems;