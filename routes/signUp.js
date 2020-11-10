const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../middleware");

const signUp = require("../controllers/signup");

router.post("/", [verifySignUp.checkDuplicateEmail], signUp.createUser);

module.exports = router;
