const express = require("express");
const router = express.Router();
const user = require("./user");

/* User route. */
router.use("/user", user);

module.exports = router;
