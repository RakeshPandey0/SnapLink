const express = require("express");
const router = express.Router();
const {handleUserSignUp, handleUserLogin} = require("../controllers/user.controller");

router.post("/", handleUserSignUp);
router.post("/login", handleUserLogin);

module.exports = router;
