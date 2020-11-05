const express = require("express");
const router = express.Router();

const items = require("../controllers/getItemDetails");

router.get("/", items.findAll);

module.exports = router;
