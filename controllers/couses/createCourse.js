const course = require("../../modals/course");

const createCourse = async (req, res) => {
  const couseData = req.body;
  const result = await course.create(couseData);
  res.send(result);
};

module.exports = createCourse;