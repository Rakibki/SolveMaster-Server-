const blogs = require("../../modals/blog");

const getSingleBlogs = async (req, res) => {
  const id = req.params.id;
  const filter = { BlogId: id };
  const result = await blogs.findOne(filter);
  res.send(result);
};

module.exports = getSingleBlogs;