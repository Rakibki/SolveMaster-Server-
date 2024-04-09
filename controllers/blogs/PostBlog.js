const blogs = require("../../modals/blog");

const PostBlog = async (req, res) => {
  const blogData = req.body;
  const result = await blogs.create(blogData);
  res.send(result);
};

module.exports = PostBlog;