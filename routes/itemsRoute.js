const express = require("express");
const router = express.Router();

const items = require("../controllers/getItemsByCategory");
const create = require("../controllers/createItem");
const itemDetails = require("../controllers/getItemDetails");

router.get("/", items.findAll);
router.get("/:id", itemDetails.findAll);
router.post("/", create.createItem);

module.exports = router;
