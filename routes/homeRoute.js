const express = require("express");
const router = express.Router();

const categories = require("../controllers");

router.get("/", categories.findAll);

module.exports = router;
