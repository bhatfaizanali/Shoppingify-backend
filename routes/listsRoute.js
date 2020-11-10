const express = require("express");
const router = express.Router();

const lists = require("../controllers/getAllLists");
const listDetails = require("../controllers/getListDetails");
const create = require("../controllers/createList");
const { authJwt } = require("../middleware");

router.get("/", [authJwt.verifyToken], lists.findAll);
router.get("/:id", [authJwt.verifyToken], listDetails.findAll);
router.post("/", [authJwt.verifyToken], create.createList);

module.exports = router;
