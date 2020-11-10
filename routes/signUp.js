const express = require("express");
const router = express.Router();

const signUp = require("../controllers/signup");

router.post("/", signUp.createUser);

module.exports = router;
