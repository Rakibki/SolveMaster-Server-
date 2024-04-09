const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  BlogId: {
    type: String,
  },
  Title: {
    type: String,
  },
  PostDate: {
    type: String,
  },
  Image: {
    type: String,
  },
  Desc1: {
    type: String,
  },
  Desc2: {
    type: String,
  },
  Tags: {
    type: [String],
  },
  Author: {
    Image: {
      type: String,
    },
    Name: {
      type: String,
    },
    authorDesc: {
      type: String,
    },
  },
});

const blogs = model("blogs", blogSchema);

module.exports = blogs;
