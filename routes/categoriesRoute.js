const express = require("express");
const router = express.Router();

const categories = require("../controllers/getAllCategories");

router.get("/", categories.findAll);

module.exports = router;
