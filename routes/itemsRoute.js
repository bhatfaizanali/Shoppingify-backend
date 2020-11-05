const express = require("express");
const router = express.Router();

const items = require("../controllers/getItemsByCategory");
const create = require("../controllers/createItem");

router.get("/", items.findAll);
router.post("/", create.createItem);

module.exports = router;
