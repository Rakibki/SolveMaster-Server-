const express = require("express");
const getAllProblems = require("../../controllers/problem/getAllProblems");
const addNewProblem = require("../../controllers/problem/addNewProblem");
const deleteProblem = require("../../controllers/problem/deleteProblem");
const getSingleProblem = require("../../controllers/problem/getSingleProblem");
const router = express.Router();

router.get("/api/v1/problems", getAllProblems);
router.post("/api/v1/problem", addNewProblem);
router.delete("/api/v1/problem/:id", deleteProblem);
router.get("/api/v1/problem/:id", getSingleProblem);

module.exports = router;
