const express = require("express");
const router = express.Router();

const lists = require("../controllers/getAllLists");
const listDetails = require("../controllers/getListDetails");
const create = require("../controllers/createList");

router.get("/", lists.findAll);
router.get("/:id", listDetails.findAll);
router.post("/", create.createList);

module.exports = router;
