const course = require("../../modals/course");

const deleteCourse = async () => {
  const id = req.params.id;
  const filter = { couseId: id };
  const result = await course.deleteOne(filter);
  res.send(result);
};

module.exports = deleteCourse;