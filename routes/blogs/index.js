const express = require("express");
const getAllBlogs = require("../../controllers/blogs/getAllBlogs");
const PostBlog = require("../../controllers/blogs/PostBlog");
const deleteBlog = require("../../controllers/blogs/deleteBlog");
const router = express.Router();

router.get("/api/v1/blogs", getAllBlogs);
router.post("/api/v1/blog", PostBlog);
router.delete("/api/v1/blog/:id", deleteBlog);

module.exports = router;