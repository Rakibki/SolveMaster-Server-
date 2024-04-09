const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
  },
  platform: {
    type: String,
  },
  url: {
    type: String,
  },
  topics: {
    type: Array,
  },
  level: {
    type: String,
  },
  duration: {
    type: String,
  },
  instructor: {
    type: String,
  },
  rating: {
    type: Number,
  },
  reviews: {
    type: Number,
  },
  description: {
    type: String,
  },
  prerequisites: {
    type: String,
  },
  format: {
    type: String,
  },
  language: {
    type: String,
  },
  certificate: {
    type: Boolean,
  },
  last_updated: {
    type: String,
  },
  course_image: {
    type: String,
  },
});

const course = model("course", courseSchema);

module.exports = course;
