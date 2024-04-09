const blogs = require("../../modals/blog");

const getAllBlogs = async (req, res) => {
  const result = await blogs.find();
  res.send(result);
};

module.exports = getAllBlogs;
