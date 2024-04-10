const express = require("express");
const getAllCourse = require("../../controllers/couses/getAllCourse");
const createCourse = require("../../controllers/couses/createCourse");
const deleteCourse = require("../../controllers/couses/deleteCourse");
const getSingleCourse = require("../../controllers/couses/getSingleCourse");
const router = express.Router();

router.get("/api/v1/courses", getAllCourse);
router.post("/api/v1/course", createCourse);
router.delete("/api/v1/course/:id", deleteCourse);
router.get("/api/v1/course/:id", getSingleCourse);

module.exports = router;
