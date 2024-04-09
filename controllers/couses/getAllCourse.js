const course = require("../../modals/course");

const getAllCourse = async (req, res) => {
  const result = await course.find();
  res.send(result);
};

module.exports = getAllCourse;
