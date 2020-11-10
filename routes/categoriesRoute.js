const express = require("express");
const router = express.Router();

const categories = require("../controllers/getAllCategories");
const { authJwt } = require("../middleware");

router.get("/", [authJwt.verifyToken], categories.findAll);

module.exports = router;
