const express = require("express");
const router = express.Router();

const items = require("../controllers/getItemsByCategory");
const create = require("../controllers/createItem");
const itemDetails = require("../controllers/getItemDetails");
const { authJwt } = require("../middleware");

router.get("/", [authJwt.verifyToken], items.findAll);
router.get("/:id", [authJwt.verifyToken], itemDetails.findAll);
router.post("/", [authJwt.verifyToken], create.createItem);

module.exports = router;
