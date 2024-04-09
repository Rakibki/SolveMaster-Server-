const blogs = require("../../modals/blog");

const deleteBlog = async (req, res) => {
  const Id = req.params.id;
  const filter = { BlogId: Id };
  const result = await blogs.deleteOne(filter);
  res.send(result);
};

module.exports = deleteBlog;