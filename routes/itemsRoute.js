const express = require("express");
const router = express.Router();

const items = require("../controllers/getItemsByCategory");

router.get("/", items.findAll);

module.exports = router;
