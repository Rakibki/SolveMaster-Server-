const express = require("express");
const getAllBlogs = require("../../controllers/blogs/getAllBlogs");
const PostBlog = require("../../controllers/blogs/PostBlog");
const deleteBlog = require("../../controllers/blogs/deleteBlog");
const getSingleBlogs = require("../../controllers/blogs/getSingleBlogs");
const router = express.Router();

router.get("/api/v1/blogs", getAllBlogs);
router.post("/api/v1/blog", PostBlog);
router.delete("/api/v1/blog/:id", deleteBlog);
router.get("/api/v1/blog/:id", getSingleBlogs);

module.exports = router;