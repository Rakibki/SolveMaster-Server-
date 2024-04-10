const course = require("../../modals/course");

const getSingleCourse = async (req, res) => {
  const id = req.params?.id;
  const filter = { couseId: id };
  const result = await course.findOne(filter);
  res.send(result);
};

module.exports = getSingleCourse;