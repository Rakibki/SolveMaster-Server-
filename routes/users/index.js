const express = require("express");
const createToken = require("../../controllers/authentication/createToken");
const deleteToken = require("../../controllers/authentication/deleteToken");
const router = express.Router();

router.post("/api/v1/crateToken", createToken);
router.post("/api/v1/deleteToken", deleteToken);

module.exports = router;